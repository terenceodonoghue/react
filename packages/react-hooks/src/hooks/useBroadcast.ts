import { useCallback, useEffect, useRef, useState } from 'react';

interface useBroadcastConfiguration {
  channel: string;
  onMessageReceived?: BroadcastChannel['onmessage'];
}

const useBroadcast = function useBroadcast({
  channel,
  onMessageReceived,
}: useBroadcastConfiguration) {
  const onMessageReceivedRef = useRef(onMessageReceived);
  const [broadcastChannel, setBroadcastChannel] = useState<BroadcastChannel>();

  const postMessage = useCallback(
    <T>(message: T) => {
      if (broadcastChannel) {
        broadcastChannel.postMessage(message);
      }
    },
    [broadcastChannel],
  );

  useEffect(() => {
    onMessageReceivedRef.current = onMessageReceived;
  }, [onMessageReceived]);

  useEffect(() => {
    const bc = new BroadcastChannel(channel);

    setBroadcastChannel(bc);
  }, [channel]);

  useEffect(() => {
    if (broadcastChannel && onMessageReceivedRef.current) {
      broadcastChannel.addEventListener(
        'message',
        onMessageReceivedRef.current,
      );
    }

    return () => broadcastChannel?.close();
  }, [broadcastChannel]);

  return postMessage;
};

export default useBroadcast;
