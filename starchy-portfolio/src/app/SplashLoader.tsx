import { useEffect, useState } from "react";

// === LISTA OBRAZÓW DO PRELOADU ===
// Wszystkie slajdy z public/assets:
const carousel = Array.from({ length: 27 }, (_, i) => `/assets/carousel${i + 1}.webp`);
// Dodatkowe (dopisz/usuń według potrzeb):
const extras = [
  "/assets/wwa_5.webp",
  // "/assets/starchy_gif.webp", // tylko jeśli naprawdę używasz
];
// Logo na środku splash-a:
const logoUrl = "/assets/starchy.webp";

function preloadImages(urls: string[]) {
  return Promise.all(
    urls.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = url;
          if (img.decode) {
            img.decode().then(() => resolve()).catch(() => resolve());
          } else {
            img.onload = () => resolve();
            img.onerror = () => resolve();
          }
        })
    )
  );
}

export default function SplashLoader({ children }: { children: React.ReactNode }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        await preloadImages([logoUrl, ...carousel, ...extras]);
      } finally {
        if (!cancelled) setHide(true); // odpala fade-out
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      {/* Aplikacja (ukryta dopóki splash) */}
      <div aria-hidden={!hide} style={{ visibility: hide ? "visible" : "hidden" }}>
        {children}
      </div>

      {/* Splash: czarny ekran + logo z /public/assets */}
      {!hide && (
        <div className="splash" role="status" aria-busy="true">
          <img
            src={logoUrl}
            alt="Logo"
            className="splash__logo"
            width={160}
            height={160}
            decoding="async"
          />
        </div>
      )}
    </>
  );
}
