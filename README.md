vue分页控件
 1. total：总页数
 2. size：每页显示条目个数不传默认10
 3. page：设置默认页码，默认1
 4. changge：页码切换方法触发
 5. isUrl：是否修改url地址
 
![image](./demo.png)

----------

    npm i vue_pageination --save

vue：

    import pageination from 'vue_pageination';
    Vue.use(pageination);

----------


>需要在mounted中初始化执行changge方法

    <pageination :total="50" :size="size" :page="10" :changge="pageFn" :isUrl="true"></pageination>


----------
