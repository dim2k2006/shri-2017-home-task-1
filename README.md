# ШРИ 2017, Домашнее задание 1

## Содержание

- [Установка](#Установка)
- [Деплой](#Деплой)
- [Задача](#Задача)
- [Решение](#Решение)

## Установка

1. git clone git@github.com:dim2k2006/shri-2017-home-task-1.git

2. cd shri-2017-home-task-1

3. npm i && bower i

4. gulp build

> Собранный проект находится в папке static.

## Деплой

1. git subtree push --prefix static origin gh-pages

## Задача:
Сверстать страницу галереи изображений.

### Страница должна содержать:
- заголовок "Придумать длинный, чтобы была необходимость уменьшать на мобилках"
- вводный текст "..."
- превью изображений, при клике изображение открывается на весь экран
- футер

### Задание должно удовлетворять критериям:
- заголовок не более 2 строк (на всех экранах)
- на больших экранах размер текста обеспечивает оптимальную длину строки
- картинки могут быть любых размеров, превью масштабируются до одинаковой высоты
- блоки с картинками занимают всю ширину страницы (распределяются по следующему правилу:
каждая первая из 7 картинок стремится к значению ширины 550px, каждая 4 - к 460px, все остальные картинки распределяются по оставшейся ширине)
- поддержка ретины (хорошая статья про это тут: https://developers.google.com/web/fundamentals/design-and-ui/responsive/images)
- футер всегда находится внизу страницы, даже если контент не занимает всю область
- верстка должна быть кроссбраузерной

### Плюсом будет:
- классы по БЭМ
- оптимизация изображений

## Как это примерно должно выглядеть
- [desktop.png](https://github.com/shri-msk-2017/rwd-home-task/blob/master/desktop.png)
- [mobile.png](https://github.com/shri-msk-2017/rwd-home-task/blob/master/mobile.png)

### Куда и когда присылать
- Работы присылать на evolkowa@yandex-team.ru
  - Желательно ссылками на сверстанную страницу (например, разместить на бесплатном [GitHub Pages](https://pages.github.com/) с помощью gh-pages)
  - На крайний случай просто архивом
- Тема: "ДЗ по лекции Адаптивная верстка"
- Срок — до 8 июля

## Решение

1. Заголовок не более 2 строк (на всех экранах).

> Размер шрифта в заголовке регулируется медиа-запросами, взависимости от размера экрана.

2. На больших экранах размер текста обеспечивает оптимальную длину строки.

> Для обеспечения оптимальной длины строки используется ограничение максимальной ширины контейнера. Размер шрифта и максимальная ширина контейнеры указаны в относительных единицах измерения «rem», благодаря чему при изменении размера шрифта у тега html оптимальная длина строки не нарушится.

3. Картинки могут быть любых размеров, превью масштабируются до одинаковой высоты.

> Все превью изображения имеют одинаковую высоту равную 168px. Оригинальные изображения имеют разные размеры.

4. Блоки с картинками занимают всю ширину страницы (распределяются по следующему правилу: каждая первая из 7 картинок стремится к значению ширины 550px, каждая 4 - к 460px, все остальные картинки распределяются по оставшейся ширине).

> Для реализации галереи используется flexbox. Для реализации правила распределения изображений используется css правило nth-child.

5. Поддержка ретины.

> Поддержка ретины реализована путем отображения изображений «универсального» размера. Так как сетка галереи не имеет четких размеров, то размер изображений в ней может варьироваться от ~ 260px до ~ 700px. Поэтому было принято решение отображать превью изображений с шириной в 1024px.

6. Футер всегда находится внизу страницы, даже если контент не занимает всю область.

> Для реализации такого поведения используется flexbox.

7. Верстка должна быть кроссбраузерной.

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome for Android |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 8 versions| last 8 versions| last 2 versions| last 8 versions| last 3 versions| last 3 versions
