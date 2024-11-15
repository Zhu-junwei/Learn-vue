import mitt from'mitt';

// 定义事件名称和参数类型
type Events = {
    hello: string;
};
// 定义一个mitt实例
const emitter = mitt<Events>();
// 导出mitt实例
export default emitter;