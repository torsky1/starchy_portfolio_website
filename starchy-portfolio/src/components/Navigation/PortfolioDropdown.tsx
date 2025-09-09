import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as Styled from "./PortfolioDropdown.styled";
import { PLAYLIST_ID, type Clip, PORTFOLIO_CLIPS } from "./portfolioClips";
import * as NavBtnStyled from "./NavigationButton/NavigationButton.styled";

const YT_API_KEY = import.meta.env.VITE_YT_API_KEY as string | undefined;

type YTItem = {
  snippet: {
    resourceId: { videoId: string };
    title: string;
  };
};

async function fetchPlaylistItems(playlistId: string, apiKey: string) {
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${playlistId}&key=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("YT API error");
  const data = await res.json();
  const items = (data.items as YTItem[]) || [];
  return items.map((it) => ({ id: it.snippet.resourceId.videoId, title: it.snippet.title }));
}

type Props = {
  label: string;
  isActive?: boolean;
};

const PortfolioDropdown = ({ label, isActive = false }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [clips, setClips] = useState<Clip[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [suppressHover, setSuppressHover] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const touchStartRef = useRef(false);

  useEffect(() => {
    
    if (PORTFOLIO_CLIPS.length > 0) {
      setClips(PORTFOLIO_CLIPS);
      return;
    }
    if (!YT_API_KEY) return;
    fetchPlaylistItems(PLAYLIST_ID, YT_API_KEY)
      .then((items) => setClips(items))
      .catch(() => setClips([]));
  }, []);

  const goToClip = (id: string) => {
    setIsOpen(false);
    setSuppressHover(true);
    navigate(`/portfolio#${id}`);
  };

  useEffect(() => {
    function handleDocClick(e: MouseEvent) {
      const target = e.target as Node | null;
      if (wrapperRef.current && target && !wrapperRef.current.contains(target)) {
        setIsOpen(false);
        setSuppressHover(false);
      }
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
        setSuppressHover(false);
      }
    }

    document.addEventListener("mousedown", handleDocClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleDocClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <Styled.DropdownWrapper
      ref={wrapperRef}
      $isOpen={isOpen}
      $suppressHover={suppressHover}
        onMouseEnter={() => {
          if (!suppressHover) setIsOpen(true);
        }}
        onMouseLeave={() => {
          if (window.innerWidth >= 769) {
            setIsOpen(false);
            setSuppressHover(false);
          } else {
            setSuppressHover(false);
          }
        }}
    >
      <NavBtnStyled.NavButton
        $isActive={isActive}
        onTouchStart={() => {
          touchStartRef.current = true;
          if (!isOpen) setIsOpen(true);
        }}
        onClick={() => {
          if (touchStartRef.current) {
            touchStartRef.current = false;
            return;
          }
          setIsOpen((v) => !v);
        }}
      >
        {label}
      </NavBtnStyled.NavButton>
      <Styled.DropdownList>
        {clips.length > 0 ? (
          clips.map((clip) => (
            <Styled.DropdownItem
              key={clip.id}
              $isActive={location.hash === `#${clip.id}`}
              onClick={() => goToClip(clip.id)}
            >
              {clip.title}
            </Styled.DropdownItem>
          ))
        ) : (
          <Styled.DropdownItem
            $isActive={false}
            onClick={() => {
              setIsOpen(false);
              setSuppressHover(true);
              window.open(`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`, "_blank");
            }}
          >
            Open playlist on YouTube
          </Styled.DropdownItem>
        )}
      </Styled.DropdownList>
    </Styled.DropdownWrapper>
  );
};

export default PortfolioDropdown;
