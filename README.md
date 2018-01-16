# Simple Google Maps App

This is simple app that uses the [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/get-api-key).

## Prerequisites

Install:
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [yarn](https://yarnpkg.com/en/docs/install)

## Getting started
* Clone the repo

    ```bash
    git clone git@github.com:vinaykukke/Stuart-Test.git && cd Stuart-Test
    ```

* Download the external API specs.  

    ```bash
    yarn && yarn start
    ```

### Step 1
Enter one of the following addresses `29 Rue du 4 Septembre` or `15 Rue de Bourgogne` as either the `pickup` or `dropoff` addresses. Once you add the addresses you will see that a `Google Maps Marker` is placed on the map on the location that you provided.

**NOTE**: This app works only the above mentioned two addresses.

### Step 2
Once you are done entering the addresses, hit the `Create a job` button to create a job. Once you hit this button if the job creation was successful you will see a toaster appear saying `Job has been successfully created`. This means that the job was created.

### Step 3
You can click on the toaster to make it disappear.


## Naming convention for styles

* Always use "S" at the beginning of the component name. It is easier to findout that the component is a styled-component and not a regular component.

> **[NameOfCssTag] [CustomDiscriptor]**

```js
export const Div
export const DivMenu
export const DivMenuItem
```

```js
import * as S from 'index.styles';

<S.Div />
<S.DivMenu />
<S.DivMenuItem />
```
