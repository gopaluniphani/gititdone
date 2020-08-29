import React from 'react';

import { Widget } from 'rasa-webchat';

const ChatBotWidget = () => {
  return (
    <Widget
      socketUrl={"https://getitdonebot.eastasia.cloudapp.azure.com"}
      socketPath={"/socket.io/"}
      title={"GetItDone"}
      params={{
        storage: "session"
      }}
    />
  )
}

export default ChatBotWidget;