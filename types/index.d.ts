import * as React from "react";

declare class ResourcesWidget extends React.Component<ResourcesWidgetProps, any> {}

export interface ResourcesWidgetProps {
    apiKey: string;
    partnerId: string;
    mode?: string;
}

export default ResourcesWidget;