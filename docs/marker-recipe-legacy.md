# Устаревший рецепт кастомного маркера — не использовать

> **Устарело. Не обращайтесь к этому рецепту для новых или существующих кейсов.** Описанные ниже градиенты и варианты маркера удалены из приложения. Актуальный общий стиль всех выделений задан в `src/styles/globals.css` правилом `.case-marker`; фразы задаются в страницах кейсов.

Ниже оставлено историческое описание прежнего маркера. Он использовал нативный HTML-элемент `<mark>` и CSS-градиент; описанные инструкции больше не соответствуют текущему коду.

## Где лежит реализация

- Логика поиска фраз и рендеринга: `referenced-chatgpt-conversation-this-is-an/src/pages/CampaignBuilderCasePage.tsx`
- Стили маркера: `referenced-chatgpt-conversation-this-is-an/src/styles/globals.css`

## Как добавить новую фразу

В `CampaignBuilderCasePage.tsx` добавь точный текст в массив `markerPhrases`:

```ts
const markerPhrases = [
  'I led discovery and MVP design',
  'новая фраза для выделения',
] as const
```

Фраза должна полностью совпадать с текстом на странице, включая регистр и пробелы. Функция `renderMarkedText()` найдёт её в абзацах и создаст:

```html
<mark class="case-marker case-marker--both-heavy case-marker--open" data-marker="true">
  новая фраза для выделения
</mark>
```

Если одна и та же фраза встречается несколько раз, будут выделены все вхождения.

## Как поменять цвет

Основной цвет меняется в одном месте — в `.case-marker`:

```css
.case-marker {
  --marker-color: rgb(0 170 255);
  --marker-edge-start: 50%;
  --marker-near-start: 90%;
  --marker-near-end: 70%;
  --marker-edge-end: 30%;
}
```

Например:

```css
--marker-color: rgb(255 120 180);
```

Все градиентные оттенки и прозрачности строятся от `--marker-color` через `color-mix()`. Голубой цвет `rgb(0 170 255)` — текущий вариант для Campaign Builder.

Строка `background-color` служит запасным вариантом для браузеров без поддержки `color-mix()`. Если нужна поддержка таких браузеров при смене цвета, обнови и её.

## CSS-эффект

```css
.case-marker {
  --marker-color: rgb(0 170 255);
  --marker-edge-start: 50%;
  --marker-near-start: 90%;
  --marker-near-end: 70%;
  --marker-edge-end: 30%;

  display: inline;
  margin: -0.1em -0.04em -0.2em -0.46em;
  padding: 0.1em 0.04em 0.2em 0.46em;
  border-radius: 0.5em 0.3em;
  color: inherit;
  background-color: rgb(0 170 255 / 18%);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

@supports (background-image: linear-gradient(90deg, color-mix(in srgb, red, transparent))) {
  .case-marker {
    background-image: linear-gradient(
      89.9deg,
      color-mix(in srgb, var(--marker-color), transparent var(--marker-edge-start)),
      color-mix(in srgb, var(--marker-color), transparent var(--marker-near-start)) 4%,
      color-mix(in srgb, var(--marker-color), transparent var(--marker-near-end)) 96%,
      color-mix(in srgb, var(--marker-color), transparent var(--marker-edge-end))
    );
  }
}

.case-marker--left-heavy {
  --marker-edge-start: 48%;
  --marker-near-start: 88%;
  --marker-near-end: 88%;
  --marker-edge-end: 82%;
}

.case-marker--right-heavy {
  --marker-edge-start: 82%;
  --marker-near-start: 88%;
  --marker-near-end: 88%;
  --marker-edge-end: 48%;
}

.case-marker--both-heavy {
  --marker-edge-start: 50%;
  --marker-near-start: 90%;
  --marker-near-end: 70%;
  --marker-edge-end: 30%;
}
```

`box-decoration-break: clone` делает отдельные закруглённые фрагменты, если фраза переносится на новую строку.

## Почему отступ слева выглядит по-разному

У маркера есть два варианта:

- `case-marker--closed` — немного заходит на пробел перед фразой;
- `case-marker--open` — начинается ровно с первой буквы и оставляет пробел чистым.

Вариант выбирается функцией `getMarkerVariant()` на основе текста фразы. Это псевдослучайное, но стабильное распределение: после обновления страницы маркеры не меняют вариант хаотично.

Градиент также получает один из трёх вариантов:

- `left-heavy` — плотнее левый край;
- `right-heavy` — плотнее правый край;
- `both-heavy` — плотнее оба края, как в исходном варианте.

Все три варианта используют тот же `--marker-color`; меняется только прозрачность отдельных точек градиента.

В коде порядок вариантов задаётся массивом:

```ts
const markerGradientVariants = ['left-heavy', 'right-heavy', 'both-heavy'] as const
```

Чтобы изменить распределение, можно поменять порядок вариантов в этом массиве или добавить новый CSS-класс с собственными значениями прозрачности.

```css
.case-marker--open {
  margin-left: 0;
  padding-left: 0;
}
```

Не стоит использовать `Math.random()` прямо во время рендера React: тогда внешний вид может меняться при каждом обновлении компонента.

## Быстрый standalone-вариант

```html
Текст до <mark class="case-marker">выделенной фразы</mark> и текст после.
```

Достаточно перенести CSS выше и заменить `--marker-color`. JavaScript нужен только для автоматического поиска фраз; если текст размечается вручную, можно использовать `<mark>` напрямую.
