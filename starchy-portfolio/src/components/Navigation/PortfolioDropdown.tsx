import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [clips, setClips] = useState<Clip[]>([]);

  useEffect(() => {
    // prefer hardcoded list if available, otherwise attempt API fetch
    if (PORTFOLIO_CLIPS.length > 0) {
      setClips(PORTFOLIO_CLIPS);
      return;
    }
    if (!YT_API_KEY) return;
    fetchPlaylistItems(PLAYLIST_ID, YT_API_KEY)
      .then((items) => setClips(items))
      .catch(() => setClips([]));
  }, []);

  const goToClip = (id: string) => navigate(`/portfolio#${id}`);

  return (
    <Styled.DropdownWrapper>
      <NavBtnStyled.NavButton $isActive={isActive}>{label}</NavBtnStyled.NavButton>
      <Styled.DropdownList>
        {clips.length > 0 ? (
          clips.map((clip) => (
            <Styled.DropdownItem key={clip.id} onClick={() => goToClip(clip.id)}>
              {clip.title}
            </Styled.DropdownItem>
          ))
        ) : (
          <Styled.DropdownItem onClick={() => window.open(`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`, "_blank")}>
            Open playlist on YouTube
          </Styled.DropdownItem>
        )}
      </Styled.DropdownList>
    </Styled.DropdownWrapper>
  );
};

export default PortfolioDropdown;
