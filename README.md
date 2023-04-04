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
  token={"1234567890"}
  mode={"frame"} // "default" or "frame"
/>
``` 

* `apiKey`: the ID of your app.
* `token`: public token (id).
* `mode` (optional): how to render content. "default" - as plain HTML or "frame" inside iframe.