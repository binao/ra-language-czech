# Czech Messages for React-Admin

Czech messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

## Installation

```sh
npm install --save ra-language-czech
```

## Usage

```js
import czechMessages from 'ra-language-czech';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
    'cs': czechMessages,
};

const i18nProvider = polyglotI18nProvider(locale => messages[locale]);

<Admin locale="cs" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## License

This translation is licensed under the MIT License, and sponsored by [marmelab](http://marmelab.com).
