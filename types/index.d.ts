import * as React from "react";

declare module 'partnerpage-resources-react' {
    export interface ResourcesWidgetProps {
        apiKey: string;
        token: string;
        mode?: string;
    }

    export default class ResourcesWidget extends React.Component<ResourcesWidgetProps, any> {}
}