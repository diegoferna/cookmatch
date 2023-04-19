import React, { useState } from 'react';

export type ApiConsumer = (query: string) => Promise<any>;

 export function useDebounce(apiConsumer: ApiConsumer, delay: number): ApiConsumer {
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  async function debouncedApiConsumer(query: string): Promise<any> {
    if (timer) {
      clearTimeout(timer);
    }

    return new Promise((resolve) => {
      const newTimer = setTimeout(async () => {
        const results = await apiConsumer(query);
        resolve(results);
      }, delay);
      setTimer(newTimer);
    });
  }

  return debouncedApiConsumer;
}

