# Bustle

## Twind

Twind is just Tailwind but with CSS in JS

To use like tailwind
`import {tw} from 'twind'`

and then pass into the className prop into a component

```
    <div className={tw`bg-gray-500 border border-blue-500`}>
```

you can also use it like classnames to do more dynamic styling

```
    <div className={tw(`bg-gray-500 border border-blue-500`, {"bg-blue-500": isActive})}>
```

If you want to override styles, set the base styles using the `apply` template literal (import it from twind package)

```
    <div className={tw(apply`bg-gray-500 border border-blue-500`, newClassNames)}>
```
