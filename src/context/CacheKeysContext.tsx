import { createContext, useContext } from "react";

type CacheKeysValue = {
  postsKey: string; // 포스트를 읽어오기 위한 캐시키
};

export const CacheKeysContext = createContext<CacheKeysValue>({
  postsKey: "/api/posts",
});

export const useCacheKeys = () => useContext(CacheKeysContext);
