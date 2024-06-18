---
id: installation
title: Datadog RUM Installation
sidebar_label: Installation
# prettier-ignore
description: Adding Datadog Real User Monitoring (RUM) to Your App
---

Datadog Real User Monitoring (RUM) allows you to visualize and analyze the
real-time performance and user journeys of your application's individual users.
This is an option to profile and monitor the user experience of your Backstage
installation.

To integrate Datadog RUM into your Backstage application, follow these steps:

### Install the necessary packages:

```bash
yarn --cwd packages/app add @datadog/browser-rum @datadog/browser-logs
```

### Configuration

Add this in your `app-config.yaml`:

```yaml
app:
  datadogRum:
    clientToken: '123456789'
    applicationId: qwerty
  #   site: datadoghq.eu
  #   env: 'staging'
  #   sessionSampleRate: 100
  #   sessionReplaySampleRate: 0
```

The `clientToken` and `applicationId` are generated from the Datadog RUM page
following
[these instructions](https://docs.datadoghq.com/real_user_monitoring/browser/).

There are two optional arguments:

- `site`: The Datadog site of your organization; defaults to `datadoghq.com`
- `env`: The application environment for Datadog events (no default)

### Edit your main front page.

To access the configurations from `app-config.yaml` in your index.js, you may need a setup to load the configuration values dynamically.
Update your `packages/app/src/index.js` file:

```
import "@backstage/cli/asset-types";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { datadogRum } from "@datadog/browser-rum";

const Main = () => {
    datadogRum.init({
        clientToken: "CLIENT_TOKEN",
        applicationId: "APPLICATION_ID",
        site: "datadoghq.eu",
        service: "SERVICE_NAME",
        env: "dev",
        version: "v0.18.6",
        trackUserInteractions: true,
        trackResources: true,
        trackLongTasks: true,
    });

    return <App />;
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
```

### Resources

The clientToken and applicationId are generated from the Datadog RUM page following these [instructions](https://docs.datadoghq.com/real_user_monitoring/browser/).
For more details and the latest updates, you can refer to:

- RUM Browser Monitoring - [Datadog Documentation](https://docs.datadoghq.com/real_user_monitoring/browser)
- GitHub - [DataDog/browser-sdk](https://github.com/DataDog/browser-sdk)
