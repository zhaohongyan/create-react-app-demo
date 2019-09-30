import { observable, computed, autorun, action, when, reaction } from "mobx";

//  observable 映射、对象和数组 API: values() keys() entries() get() set() has() remove()

class Demo4store {

  constructor() {
    // this.total = null;
  }

  @observable title = 'hello world';
  @observable id = 1;
  @observable showYou = true;
  @observable myList = [];
  @observable myObj = {};
  @observable myMap = new Map();

  
  // 深层可观察性 { deep: true }
  @observable price = 100;
  @observable amount = 1;
  @observable total = null;
  @observable total2 = null;

  // 引用可观察性
  // 虚构的例子，如果 author 是不可变的，我们只需要存储一个引用，不应该把它变成一个可变的 observable 对象
  // 注意，可以通过使用 const box = observable.shallowBox（value） 来创建一个装箱的 observable 引用
  @observable.ref author = null;

  // 浅层可观察性 调节器会应用“单层”可观察性。 { deep: false }
  @observable.shallow authors = []

  @observable todos = [
    { title: "tea", completed: true },
    { title: "coffee", completed: false },
    { title: "cola", completed: false }
  ]
 
  // autorun computed 响应式调用的表达式
  // 区别： 如果你想响应式的产生一个可以被其它 observer 使用的值，请使用 @computed，
  // 如果你不想产生一个新值，而想要达到一个效果，请使用 autorun。 
  @computed get getTotal() {
    return this.price * this.amount;
  }

  // set setTotal(total) {
  //   this.total = total * 100;
  // }

  
  total = this.price * this.amount;

  @observable tick = 0
  @action.bound
  increment() {
    console.log('increment+++++++')
    this.tick++ 
  }

}

const Demo4storeNew = new Demo4store();

// 经验法则：如果你有一个函数应该自动运行，但不会产生一个新的值，请使用autorun。 其余情况都应该使用 computed.
// Autoruns 是关于 启动效果 (initiating effects) 的 ，而不是产生新的值
const disposer = autorun(() => {
  console.log('this', Demo4storeNew);
  console.log('remaining: ', Demo4storeNew.todos
    .filter(todo => !todo.completed)
    .map(todo => todo.title)
    .join(",")
  )
})

const reaction1 = reaction(() => Demo4storeNew.todos.length, (len, reaction) => {
  console.log('reaction len: ', len);
  // reaction.dispose(); // 清理reaction
});

Demo4storeNew.todos.push({ title: 'juice', completed: false })

// 清理autorun
disposer()

Demo4storeNew.todos.push({ title: 'kate', completed: false })

// setInterval(Demo4storeNew.increment, 1000)

export default Demo4storeNew;

