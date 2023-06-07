# CSS NOTE

## 1. display

> 设置元素如何显示（block还是inline box），以及子元素如何布局

1. block

2. inline-block

3. none

4. flex

5. grid

6. ...

## 2. position

> 指定了元素的定位

1. static

2. relative：定位是相对其正常位置，但它原本所占的空间不会改变，经常被用来作为absolute元素的容器块

3. fixed

4. absolute：绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<html>。使元素的位置与文档流无关，因此不占据空间。

5. sticky

元素的定位与文档流无关，所以它们可以覆盖页面上的其它元素。z-index属性指定了一个元素的堆叠顺序，值大的在上面。

## 3. 伪类/伪元素

伪类针对的是元素的特殊状态，伪元素针对的是元素的特殊内容。

## 4. 盒模型

### 4.1 W3C标准盒模型

width/height = content

### 4.2 IE盒模型

width/height = content + padding + border

### 4.3 指定

1. IE6，7，8：如果没有写DOCTYPE→IE盒模型

2. IE8+：可以由box-sizing控制，默认为content-box，可以设置为border-boxr

3. 当前W3C标准中盒模型是可以通过box-sizing自由的进行切换的。

### 4.4 TIPS

1. css的盒模型由content + padding + border + margin组成。但盒子的大小由content + padding + border这几部分决定，把margin算进去的那是盒子占据的位置，而不是盒子的大小！

2. 应尽量使用标准的W3C模型(需在页面中声明DOCTYPE类型)，这样可以避免多个浏览器对同一页面的不兼容。若不声明DOCTYPE类型，IE浏览器会将盒子模型解释为IE盒子模型，FireFox等会将其解释为W3C盒子模型；若在页面中声明了DOCTYPE类型，所有的浏览器都会把盒模型解释为W3C盒模型。

## 5. em, rem与px

  
