import React from 'react';

import { Widget } from 'rasa-webchat';

const ChatBotWidget = () => {
  return (
    <Widget
      initPayload={"/get_started"}
      socketUrl={"http://getitdone.centralindia.cloudapp.azure.com:5005"}
      socketPath={"/socket.io/"}
      title={"GetItDone"}
      customData={{"language": "en"}}
      params={{
        storage: "session"
      }}
      showMessageDate={true}
    />
  )
}

export default ChatBotWidget;