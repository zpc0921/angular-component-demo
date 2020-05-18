# 生命周期例子 
- route: /life
****
- 演示生命周期初始化
- 演示变化检测
- 变化检测演示ngOnChanges
- 变化检测演示viewInit中改变属性值
- 演示组件销毁
- 演示属性绑定、插值绑定

# 组件交互 
- route: /interaction
****
- viewChild
- contentChild
- 单向数据流规则

# 属性型指令 
- route: /directive
****
- 通过指令改变divElement颜色

# 管道 
- route: /pipe
****
- 通过管道显示任务状态的label，显示不同状态的颜色
- 通过改变任务名字，展示service通讯；

# 小练习：寻找幸运星
- route: /find-lucky
****
- 初始化3000个表格框，类似于扫雷框；
- find-lucky进行初始化
- lucky-grid中展示每个幸运框的控制，
实现点击未打开的控制框时，根据lucky标志生成'囧''，或幸运数；
- 不同的幸运数展示不同的颜色，0-3展示red，4-7展示green，8-10展示blue；cd
- lucky-grid打开时，如果是lucky，随机生成一个lucky数字，否则显示'囧'字；
- find-lucky组件中增加展示分数；
- find-lucky支持restart功能；
