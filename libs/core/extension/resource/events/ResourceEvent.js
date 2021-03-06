/**
 * Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RES;
(function (RES) {
    /**
     * @class RES.ResourceEvent
     * @classdesc
     * @extends egret.Event
     */
    var ResourceEvent = (function (_super) {
        __extends(ResourceEvent, _super);
        /**
         * 构造函数
         * @method RES.ResourceEvent#constructor
         * @param type {string}
         * @param bubbles {boolean}
         * @param cancelable {boolean}
         */
        function ResourceEvent(type, bubbles, cancelable) {
            if (bubbles === void 0) { bubbles = false; }
            if (cancelable === void 0) { cancelable = false; }
            _super.call(this, type, bubbles, cancelable);
            /**
             * 已经加载的文件数
             * @member {number} RES.ResourceEvent#itemsLoaded
             */
            this.itemsLoaded = 0;
            /**
             * 要加载的总文件数
             * @member {number} RES.ResourceEvent#itemsTotal
             */
            this.itemsTotal = 0;
            /**
             * 资源组名
             * @member {string} RES.ResourceEvent#groupName
             */
            this.groupName = "";
            /**
             * 一次加载项加载结束的项信息对象
             * @member {egret.ResourceItem} RES.ResourceEvent#resItem
             */
            this.resItem = null;
        }
        /**
         * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @method RES.ResourceEvent.dispatchResourceEvent
         * @param target {egret.IEventDispatcher}
         * @param type {string}
         * @param groupName {string}
         * @param resItem {egret.ResourceItem}
         * @param itemsLoaded {number}
         * @param itemsTotal {number}
         */
        ResourceEvent.dispatchResourceEvent = function (target, type, groupName, resItem, itemsLoaded, itemsTotal) {
            if (groupName === void 0) { groupName = ""; }
            if (resItem === void 0) { resItem = null; }
            if (itemsLoaded === void 0) { itemsLoaded = 0; }
            if (itemsTotal === void 0) { itemsTotal = 0; }
            var eventClass = ResourceEvent;
            var props = egret.Event._getPropertyData(eventClass);
            props.groupName = groupName;
            props.resItem = resItem;
            props.itemsLoaded = itemsLoaded;
            props.itemsTotal = itemsTotal;
            egret.Event._dispatchByTarget(eventClass, target, type, props);
        };
        /**
         * 一个加载项加载失败事件。
         * @constant {string} RES.ResourceEvent.ITEM_LOAD_ERROR
         */
        ResourceEvent.ITEM_LOAD_ERROR = "itemLoadError";
        /**
         * 配置文件加载并解析完成事件。注意：若有配置文件加载失败，将不会抛出此事件，若要处理配置加载失败，请同时监听CONFIG_LOAD_ERROR事件。
         * @constant {string} RES.ResourceEvent.CONFIG_COMPLETE
         */
        ResourceEvent.CONFIG_COMPLETE = "configComplete";
        /**
         * 配置文件加载失败事件
         * @constant {string} RES.ResourceEvent.CONFIG_COMPLETE
         */
        ResourceEvent.CONFIG_LOAD_ERROR = "configLoadError";
        /**
         * 延迟加载组资源加载进度事件
         * @constant {string} RES.ResourceEvent.GROUP_PROGRESS
         */
        ResourceEvent.GROUP_PROGRESS = "groupProgress";
        /**
         * 延迟加载组资源加载完成事件。注意：若组内有资源项加载失败，将不会抛出此事件，若要处理组加载失败，请同时监听GROUP_LOAD_ERROR事件。
         * @constant {string} RES.ResourceEvent.GROUP_COMPLETE
         */
        ResourceEvent.GROUP_COMPLETE = "groupComplete";
        /**
         * 延迟加载组资源加载失败事件
         * @constant {string} RES.ResourceEvent.GROUP_LOAD_ERROR
         */
        ResourceEvent.GROUP_LOAD_ERROR = "groupLoadError";
        return ResourceEvent;
    })(egret.Event);
    RES.ResourceEvent = ResourceEvent;
    ResourceEvent.prototype.__class__ = "RES.ResourceEvent";
})(RES || (RES = {}));
