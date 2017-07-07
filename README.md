# ШРИ 2017, Домашнее задание 1

## Содержание

- [Установка](#Установка)
- [Деплой](#Деплой)
- [Задача](#Задача)
- [Описание](#Описание)

## Установка

1. git clone git@github.com:dim2k2006/shri-2017-home-task-1.git

2. cd shri-2017-home-task-1

3. npm i bower i

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

## Описание


