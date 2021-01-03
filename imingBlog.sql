-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2021-01-03 20:39:21
-- 服务器版本： 8.0.16
-- PHP 版本： 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `imingBlog`
--

-- --------------------------------------------------------

--
-- 表的结构 `article`
--

CREATE TABLE `article` (
  `id` int(32) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `typeId` int(11) NOT NULL,
  `intro` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `addTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `viewCount` int(11) NOT NULL DEFAULT '0',
  `status` tinyint(2) NOT NULL DEFAULT '1',
  `keyword` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `personalBackPicture` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `article`
--

INSERT INTO `article` (`id`, `title`, `content`, `typeId`, `intro`, `viewCount`, `status`, `keyword`, `personalBackPicture`) VALUES
(1, '这是我写的第一篇文章哦', '第一篇文章不知写什么，不如按照规矩来吧！！\r\nHELLO WORLD！\r\n第一篇文章不知写什么，不如按照规矩来吧！！\r\nHELLO WORLD！\r\n', 1, '第一篇文章不知写什么，不如按照规矩来吧！！HELLO WORLD！第一篇文章不知写什么，不如按照规矩来吧！！HELLO WORLD！', 11, 1, '1', ''),
(2, '一部容器呀', '司法所地方斯蒂芬斯蒂芬斯蒂芬 ', 1, '第一篇文章不知写什么，不如按照规矩来吧！！HELLO WORLD！第一篇文章不知写什么，不如按照规矩来吧！！HELLO WORLD！', 3, 1, '1', ''),
(3, '123123', '<p>123123</p>', 2, '第一篇文章不知写什么，不如按照规矩来吧！！HELLO WORLD！第一篇文章不知写什么，不如按照规矩来吧！！HELLO WORLD！', 0, 1, '123123', ''),
(4, 'ES6中对class的理解（一）', '<p>123123<strong style=\"font-size: 1em;\">自己的理解，有错误还望指出：</strong></p><p>&nbsp; &nbsp; &nbsp; &nbsp; 在学习JavaScript的时候，我们知道他是没有类（class）的写法的，所以我们需要类的时候一般是使用构造函数来模拟类的写法。在ES6中提供了class写法，在ES5中是没有的，有时候我们在写一个构造函数的时候，使用的是function来写一个构造函数，但是这种函数式编程的方式，很难直观的发现构造函数。如下：</p><p>&nbsp; &nbsp; &nbsp; &nbsp;在ES5中，我们写一个构造函数（模拟类）的时候会这么写，可以看到这个也是一个函数，但是我将名字的第一位大写，这样可以区分于普通函数。。。并且通过this.x来将属性或者方法绑定在该构造函数里面去。</p><h3><a></a><a></a>ES5写类</h3><pre><code><ol><li><p><br></p><p>function Cus(a,b){</p></li><li><p><br></p><p>    this.a = a;</p></li><li><p><br></p><p>    this.b = b;</p></li><li><p><br></p><p>    this.add = function (){</p></li><li><p><br></p><p>        return this.a +this.b</p></li><li><p><br></p><p>    }</p></li><li><p><br></p><p>}</p></li><li><p><br></p><p>var c = new Cus()</p></li><li><p><br></p><p>console.log(c.add())</p></li></ol></code></pre><p>假设我们现在使用的是ES6来写一个类，尽管提供了一个class的写法，但是下面这种写法是错的，如下：</p><pre><code><ol><li><p><br></p><p>class CUS{</p></li><li><p><br></p><p>    this.a = 12;</p></li><li><p><br></p><p>    this.b = 13;</p></li><li><p><br></p><p>    this.add = function (){</p></li><li><p><br></p><p>        return this.a +this.b</p></li><li><p><br></p><p>    }</p></li><li><p><br></p><p>}</p></li></ol></code></pre><p>为什么不能使用this，那是因为这里的类都没有实例化，也就是说我们还没有创建一个类的实例，this是要绑定到对象上面去的，这里就要讲到ES6 的构造器constructor（）</p><h3><a></a><a></a>ES6写类</h3><pre><code><ol><li><p><br></p><p>class Person {</p></li><li><p><br></p><p>    constructor() {</p></li><li><p><br></p><p>        this.firstname = \"Ymw\";</p></li><li><p><br></p><p>        this.lastname = \"ming\";</p></li><li><p><br></p><p>        this.add = function(){</p></li><li><p><br></p><p>            return this.firstname+\' \'+this.lastname</p></li><li><p><br></p><p>        }</p></li><li><p><br></p><p>    }</p></li><li><p><br></p><p>}</p></li><li><p><br></p><p> </p></li><li><p><br></p><p>var person1 = new Person();</p></li><li><p><br></p><p> </p></li><li><p><br></p><p>console.log(person1.firstname+\' \'+person1.lastname); //Ymw ming</p></li><li><p><br></p><p>console.log(person1.add()); //Ymw ming</p></li></ol></code></pre><p>这里我把add方法也放在了构造器里面，虽然可以这么做，但是建议constructor()里面只放属性，方法写在constructor()平行位置的下边，如：</p><pre><code><ol><li><p><br></p><p>class Person {</p></li><li><p><br></p><p>    constructor() {</p></li><li><p><br></p><p>        this.firstname = \"Ymw\";</p></li><li><p><br></p><p>        this.lastname = \"ming\";</p></li><li><p><br></p><p>        this.add = function(){</p></li><li><p><br></p><p>            return this.firstname+\' \'+this.lastname</p></li><li><p><br></p><p>        }</p></li><li><p><br></p><p>    }</p></li><li><p><br></p><p>    say() {</p></li><li><p><br></p><p>        return \"hi,\"+this.firstname+\' \'+this.lastname</p></li><li><p><br></p><p>    }</p></li><li><p><br></p><p>}</p></li><li><p><br></p><p> </p></li><li><p><br></p><p>var person1 = new Person();</p></li><li><p><br></p><p> </p></li><li><p><br></p><p>console.log(person1.firstname+\' \'+person1.lastname);//Ymw ming</p></li><li><p><br></p><p>console.log(person1.add());  //Ymw ming</p></li><li><p><br></p><p>console.log(person1.say());  //hi,Ymw ming</p></li></ol></code></pre><h3><a></a><a></a>class传参数</h3><p>千万不要在class旁边写个括号传参数，这个是错的，一般编辑器就会提示出错了，正确的写法是写在constructor()括号内，如下：</p><pre><code><ol><li><p><br></p><p>class Person {</p></li><li><p><br></p><p>    constructor(first,last) {</p></li><li><p><br></p><p>        this.firstname = first;</p></li><li><p><br></p><p>        this.lastname = last;</p></li><li><p><br></p><p>        this.add = function(){</p></li><li><p><br></p><p>            return this.firstname+\' \'+this.lastname</p></li><li><p><br></p><p>        }</p></li><li><p><br></p><p>    }</p></li><li><p><br></p><p>    say() {</p></li><li><p><br></p><p>        return \"hi,\"+this.firstname+\' \'+this.lastname</p></li><li><p><br></p><p>    }</p></li><li><p><br></p><p>}</p></li><li><p><br></p><p> </p></li><li><p><br></p><p>var person1 = new Person(\'Ymw\',\"ming\");</p></li><li><p><br></p><p> </p></li><li><p><br></p><p>console.log(person1.firstname+\' \'+person1.lastname);//Ymw ming</p></li><li><p><br></p><p>console.log(person1.add());  //Ymw ming</p></li><li><p><br></p><p>console.log(person1.say());  //hi,Ymw ming</p></li></ol></code></pre>', 2, '第一篇文章不知写什么，不如按照规矩来吧！！HELLO WORLD！第一篇文章不知写什么，不如按照规矩来吧！！HELLO WORLD！', 0, 1, 'jacascript', ''),
(5, 'js原型问题', '<p>首先先引入一道题</p><pre><code><ol><li><p><br></p><p>function A() {</p></li><li><p><br></p><p>&nbsp;&nbsp;&nbsp;&nbsp;this.do=function() {return ‘foo’;};</p></li><li><p><br></p><p>}</p></li><li><p><br></p><p>A.prototype=function() {</p></li><li><p><br></p><p>&nbsp;&nbsp;&nbsp;&nbsp;this.do=function() {return ‘bar’};</p></li><li><p><br></p><p>};</p></li><li><p><br></p><p>var x=new A().do();</p></li><li><p><br></p><p>x&nbsp;的值是：</p></li></ol></code><p><br></p></pre><p>这里有四个选项</p><blockquote><pre>bar</pre><pre>报错</pre><pre>foo</pre><pre>undefined</pre></blockquote><p>&nbsp;一开始可能会选择bar,因为看起来重写原型了。答案是foo.因为这里原型被重写了，切断了原型和实例之间的关系。来看一下控制台</p><p><img alt=\"\" src=\"https://img-blog.csdnimg.cn/20190823143704925.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1ltd1dvdw==,size_16,color_FFFFFF,t_70\"></p><p>可能不好理解，我们现在换一个方法，换成todo,如下</p><p><img alt=\"\" src=\"https://img-blog.csdnimg.cn/20190823143948665.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1ltd1dvdw==,size_16,color_FFFFFF,t_70\"></p><p>出现这个错误意味着找不到这个方法，说明我们原型和实例之间的关系被切断了，所以没办法影响到实例。除非我们这样写</p><p><img alt=\"\" src=\"https://img-blog.csdnimg.cn/20190823144302220.png\"></p><p>才能正常输出</p>', 1, '第一篇文章不知写什么，不如按照规矩来吧！！HELLO WORLD！第一篇文章不知写什么，不如按照规矩来吧！！HELLO WORLD！', 1, 1, 'js', ''),
(6, 'react登陆问题', '<p>在数据库中我们提取出来的文本是以一串html字符串，会原封不动的包含标签显示到页面上，这个时候要用到dangerouslySetInnerHTML来解决问题</p><p><img alt=\"\" src=\"https://img-blog.csdnimg.cn/20190730161620181.png\"></p><p>dangerouslySetInnerHTML格式不要写错&nbsp;</p>', 3, '第一篇文章不知写什么，不如按照规矩来吧！！HELLO WORLD！第一篇文章不知写什么，不如按照规矩来吧！！HELLO WORLD！', 0, 1, 'react', ''),
(7, '主要是测试一下我的代码什么的', '<pre type=\"JavaScript\"><code><xmp>const a = \'this is a yangmingwu\'s blog\'</xmp><xmp>for(let item of arrrList) {</xmp><xmp>　　　　if(item === 234) {</xmp><xmp></xmp><xmp>　　　　　　　　console.log(\'helloworld\')</xmp><xmp>　　　　}</xmp><xmp>}</xmp></code></pre>', 2, NULL, 1, 1, 'code', '');

-- --------------------------------------------------------

--
-- 表的结构 `type`
--

CREATE TABLE `type` (
  `id` int(32) NOT NULL,
  `typeName` varchar(255) NOT NULL,
  `typeOrder` int(8) NOT NULL,
  `addTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `type`
--

INSERT INTO `type` (`id`, `typeName`, `typeOrder`) VALUES
(1, 'react', 0),
(2, 'javascript', 1),
(3, 'css', 2),
(4, 'webpack', 4);

-- --------------------------------------------------------

--
-- 表的结构 `webBase`
--

CREATE TABLE `webBase` (
  `id` int(11) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `homeKeyword` varchar(255) NOT NULL,
  `homeDescr` text NOT NULL,
  `webName` varchar(255) NOT NULL,
  `backgroundPIcture` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `personalIntro` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `qq` varchar(50) DEFAULT NULL,
  `qqQrcode` varchar(255) DEFAULT NULL,
  `wechat` varchar(50) DEFAULT NULL,
  `wechatQrcode` varchar(255) DEFAULT NULL,
  `personalName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `webBase`
--

INSERT INTO `webBase` (`id`, `logo`, `homeKeyword`, `homeDescr`, `webName`, `backgroundPIcture`, `personalIntro`, `avatar`, `qq`, `qqQrcode`, `wechat`, `wechatQrcode`, `personalName`) VALUES
(1, 'IMING', '杨明戊,iming,艾明博客,imingblog,iming前端,iming', '艾明博客，杨明戊前端个人技术博客，记录自己的前端成长路程。', 'IMING', '123', '笔耕书上除勤奋无他，舟行学海有远志领航。', '123', '1622165031', '123', 'ymw1997v', '123', '  艾明');

--
-- 转储表的索引
--

--
-- 表的索引 `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `webBase`
--
ALTER TABLE `webBase`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_2` (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `article`
--
ALTER TABLE `article`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用表AUTO_INCREMENT `type`
--
ALTER TABLE `type`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `webBase`
--
ALTER TABLE `webBase`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
