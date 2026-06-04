import { useEffect, useState, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from "react";

function readLocation() {
  return {
    pathname: window.location.pathname,
    hash: window.location.hash,
  };
}

export function useAppLocation() {
  const [location, setLocation] = useState(readLocation);

  useEffect(() => {
    const onPopState = () => setLocation(readLocation());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return location;
}

export function isAppHref(href: string) {
  return href.startsWith("/");
}

export function navigateTo(href: string, replace = false) {
  if (!isAppHref(href)) {
    window.location.assign(href);
    return;
  }

  const url = new URL(href, window.location.origin);
  const next = `${url.pathname}${url.search}${url.hash}`;

  if (replace) {
    window.history.replaceState(null, "", next);
  } else {
    window.history.pushState(null, "", next);
  }

  window.dispatchEvent(new PopStateEvent("popstate"));
}

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
};

export function AppLink({
  children,
  href,
  onClick,
  target,
  rel,
  ...props
}: AppLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      target === "_blank" ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !isAppHref(href)
    ) {
      return;
    }

    event.preventDefault();
    navigateTo(href);
  };

  return (
    <a {...props} href={href} onClick={handleClick} rel={rel} target={target}>
      {children}
    </a>
  );
}
