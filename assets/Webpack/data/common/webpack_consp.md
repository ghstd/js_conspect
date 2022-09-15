1. При инициализации проекта создается файл package.json, в котором идет описание проекта, скриптов-команд, указание установленных пакетов(зависимостей).
2. При установке пакетов появляется папка node_modules, в которую устанавливаются данные пакеты со всеми зависимостями, в эту же папку автоматически устанавливается webpack.
3. Инициализация проекта npm init ==> файл package.json, установка webpack webpack-cli --save-dev ==> папка node_modules.
4. webpack-cli ==> инструмент, который позволяет запускать webpack из терминала.
5. В webpack есть два режима development и production.
6. В development режиме мы получаем файлы, которые можем проанализировать и вснести правки. Можем использовать devServer, который поднимает локальный сервер и позволяет вести разработку напрямую в браузере, при этом в папке dist не компилируется никаких файлов, а все правки в исходном коде мгновенно отображаются в браузере.
7. В production режиме мы получаем оптимизированные файлы, которые передаем заказчику.
8. Вручную создаем папку src, в которой будут содержаться все файлы с исходным кодом. Из нее webpack при компиляции копирует все файлы в папку dist.
9. У webpack есть конфигурация по-умолчанию, чтобы настроить ее, нужно создать файл webpack.config.js, в который вносятся настройки всего проекта. Тогда при запуске webpack обращается не к настройкам по-умолчанию, а к файлу конфигурации.
10. Webpack понимает только js и json файлы. Поэтому, стили импортируются в js файлы и вместе с файлами html, изображениями и шрифтами проходят специальную обработку через loaders и plugins, которые устанавливаются через терминал и прописываются в конфигурации webpack.
11. Т.к. webpack понимает только js файлы, они и являются входными точками (entry points), по-умолчанию webpack ожидает для входа index.js, на выходе он скомпилирует файл main.js. Чтоб задать свои имена, нужно в webpack.config.js задать настройки в объекте entry.
12. В webpack можно передать несколько файлов js: это импорт второстепенного файла в основной и передача его через объект entry. То же самое будет, если в entry указать массив путей в строков формате к этим файлам без применения импортов.
13. Если на выходе в dist мы хотим получиться два отельных файла js, в объекте entry необходимо указать два ключа(имени этих файлов), значения ключей будут пути к исходным файлам.
14. Мы передаем в webpack файл index.js со всеми т.н. зависимостями(это все файлы, которые не относятся к файлу js и которые импортированны в него прямым или косвенным способом).
15. Т.к. webpack понимает только js, то на выходе он будет компилировать единый файл js со встроенными в него стилями, изображениями, шрифтами.
16. Чтобы получить на выходе отдельно от файла js файлы со стилями, изображениями, шрифтами, нужно чтоб они в качестве зависимотей прошли особую обработку в процессе компиляции webpack.
17. Для обработки этих зависимостей в webpack используются loaders, plugins и модули ресурсов.
18. Loaders работают только на определенном этапе компиляции. Основной метод загрузки loaders это снизу вверх или справо на лево.
19. Style-loader, css-loader, postcss-loader - для работы с файлами стилей.
20. Sass-loader - для работы с файлами препроцессоров.
21. Pug-loader - для работы с файлами шаблонизаторов.
22. Html-loader - для работы с изображениями, встроенными в html.
23. Babel-loader - для работы с файлами js.
24. Каждый loader по сути представляет из себя функцию, которая в качестве аргументов принимает определенные параметры и опции, и возвращает или готовый файл, или код js.
25. Plugins - более мощный инструмент, чем loaders.
26. Есть предустановленные plugins(идут вместе с webpack) и сторонние(ставятся вручную).
27. Главная особенность plugins - то, что они могут включаться в работу на любом этапе компиляции с помощью т.н. хуков.
28. Все plugins в webpack являются js-классами.
29. MiniCssExtractPlugin - для работы с файлами стилей.
30. HtmlWebpackPlugin - для работы с html документами.
31. Модули ресурсов asset/resource являются отдельными js-модулями в webpack.
32. Они заменяют ранее использованные loaders(raw-loader, url-loader, file-loader).
33. Предназначены, например, для извлечения шрифтов из файлов стилей, изображений, установленных в качестве background в файлах стилей.
34. Пример работы конфигурации проекта:
- для работы со стилями используется цепочка loaders:
- sass-loader - преобразует sass, scss файлы в css и передает их дальше по цепочке.
- postcss-loader - добавлене префиксов к стилям для поддержки старыми браузерами.
- css-loader - распознает импорты стилей в файле js.
- MiniCssExtractPlugin - извлекает стили из файла js и помещает их на выходе в отдельный файл(используется в production режиме).
- style-loader - напрямую помещает стили в DOM-дерево через dev-server в секцию head для отображения в браузере. (Используется в mode: "development" (режиме разработки), не извлекает файлы, а напрямую встраивает в браузер через память компьютера).
- HtmlWebpackPlugin компилирует файлы html из src в dist с возможностью предварительной обработки.
- asset/resource(модули ресурсов) - позволяют извлекать изображения, установленные в качестве background в файлах стилей, извлекать шрифты, заданные в стилях через @font-face.
- html-loader - позволяют извлекать изображения, установленные в теге img в html файлах.
- babel-loader - работает с js файлами, позволяет преобразовать код по новым стандартам в код по старым для стандартам для поддержки браузерами.
35. Пример работы самого webpack:
- Dependency Graph - после передачи через entry point файла js, идет построение графа зависимотей(всех зависимостей, указанных в файле js).
- NormalModuleFactory - фабрика модулей, создает модули из каждой извлеченной зависимости, при этом в работе участвуют Resolvers, которые отслеживают правильность указанных путей к зависимостям.
- Modules ==> Loaders - далее каждый созданный модуль проходит через установленные loaders.
- JavascriptParser - включается в работу JavascriptParser, это класс webpack, который расширяет библиотеку Tapable(вся работа webpack построена на этой библиотеке) и предоставляет возможность создания хуков в данной библиотеке.
- Optimization - последний этап компиляции, выдача готовых файлов в папку dist через output points, удаление лишних пробелов в коде, замена имен переменных на более короткие, chanking(дробление файлов, если было указано в файле конфигурации).
36. Основной запуск webpack начинается с файла package.json.
37. Вся архитектура webpack написана на typescript и в основном состоит из классов и интерфейсов.
38. Главным классом в webpack является класс Compiler, который выполняет основную работу при компиляции.