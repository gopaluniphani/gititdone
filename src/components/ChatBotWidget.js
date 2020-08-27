import React from 'react';

import { Widget } from 'rasa-webchat';

const ChatBotWidget = () => {
  return (
    <Widget
      initPayload={"/get_started"}
      socketUrl={"https://getitdonebot.eastasia.cloudapp.azure.com"}
      socketPath={"/socket.io/"}
      customData={{"language": "en"}}
      title={"GetItDone"}
    />
  )
}

export default ChatBotWidget;