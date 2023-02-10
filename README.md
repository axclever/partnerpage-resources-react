An [Partnerpage Resoruces](https://resources.partnerpage.io/) component for React that encapsulates the embed widget and makes it work like a "real" React component.

## Installation

```
npm i partnerpage-resources-react
```

## Setup

```jsx
import PartnerpageResources from 'partnerpage-resources-react';

<PartnerpageResources
  apiKey={"00000000-aaaa-aaaa-aaaa-00000000"}
  partnerId={"1234567890"}
  mode={"frame"} // "default" or "frame"
/>
``` 

* `apiKey`: the ID of your app.
* `partnerId`: the ID of your partner.
* `mode` (optional): how to render content. "default" - as plain HTML or "frame" inside iframe.