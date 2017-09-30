vue分页控件
[在线DEMO](http://jqvue.com/demo/vue_pageination/index.html "悬停显示")  
----------

    npm i vue_pageination --save

vue：

    import pageination from 'vue_pageination';
    Vue.use(pageination);

----------


 1. total：总页数
 2. size：每页显示条目个数不传默认10
 3. page：设置默认页码，默认1
 4. changge：页码切换方法触发，比如：传入pageFn方法接收page页码


     pageFn(val){
        this.page = val;
      }

 5.搜索执行

     query(){
            if (this.param.page == 1) {
              this.pageFn(1);
            } else {
              this.param.page = 1;
            }
          }`
 
6.重置


     reset(){
            this.pageFn(1);
     }//重置
7.isUrl：是否修改url地址

![image](./demo.png)


>需要在mounted中初始化执行changge方法

    <pageination :total="50" :size="size" :page="10" :changge="pageFn" :isUrl="true"></pageination>



----------
