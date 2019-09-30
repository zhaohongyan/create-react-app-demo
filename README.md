# create-react-app-demo
利用脚手架create-react-app搭建完整项目

用custom-react-scripts 替换 react-script (react-script不支持decorator)

### todolist：
+ 完成 less 
+ 完成 css-module
+ 完成 mock
+ mobx 在看：工具函数
+ router config
+ react hook

-------------------------------------------

#### MobX会对什么作出反应?
MobX 会对在追踪函数执行过程中读取现存的可观察属性做出反应。

“读取” 是对象属性的间接引用，可以用过 . (例如 user.name) 或者 [] (例如 user['name']) 的形式完成。
“追踪函数” 是 computed 表达式、observer 组件的 render() 方法和 when、reaction 和 autorun 的第一个入参函数。
“过程(during)” 意味着只追踪那些在函数执行时被读取的 observable 。这些值是否由追踪函数直接或间接使用并不重要。
换句话说，MobX 不会对其作出反应:

从 observable 获取的值，但是在追踪函数之外
在异步调用的代码块中读取的 observable

#### mobx知识点
+ MobX 追踪属性访问，而不是值， 在追踪函数内进行间接引用
+ 在追踪函数内访问数组属性，所有不会改变数组的数组方法都会自动地追踪。（最好追踪length）
+ 使用对象的非 observable 属性: 这将不会作出反应。MobX 只能追踪 observable 属性。在 MobX 5 中是会作出反应的，因为 MobX 5 可以追踪还不存在的属性。（注意，这只适用于由 observable 或 observable.object 创建出的对象。 对于类实例上的新属性，还是无法自动将其变成 observable 的。）
+ 使用 observable 对象还不存在的属性： 这将不会作出反应。MobX 不会对当追踪开始时还不能存在的 observable 属性作出反应。
+ 使用映射中还不存在的项：这将会作出反应。Observable 映射支持观察还不存在的项。 （第一次是undefined，通过has来先检查该项是否存在）
+ MobX 4 之后还可以将 observable 对象当做动态集合使用，如果使用 MobX API 来进行读/更新操作，那么 MobX 可以追踪属性的变化。
+ autorun 不会追踪 console.log 访问的数据。所以，请确保始终传递不变数据 ( immutable data ) 或防御副本给 console.log。
+ Observable 映射支持观察还不存在的项 所以对于动态键集合，总是使用 observable 映射。
+ MobX 只追踪同步地访问数据，异步不行
+ MobX 只会为数据是直接通过 render 存取的 observer 组件进行数据追踪
+ 避免在本地字段中缓存 observable
  

```

import { get, set, observable } from "mobx"

const twitterUrls = observable.object({
    "John": "twitter.com/johnny"
})

autorun(() => {
    console.log(get(twitterUrls, "Sara")) // get 可以追踪还未创建的属性
})
set(twitterUrls, { "Sara" : "twitter.com/horsejs"})

```

-------------------------------------------