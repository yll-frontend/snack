// 定义食物类Food
class Food {
    // 定义一个属性表示食物所对应的元素
    private element: HTMLElement;

    constructor() {
        // 获取页面中的food元素并将其赋值给element
        // 末尾加上叹号，表示id为food的元素必定存在（非空）
        this.element = document.getElementById('food')!;
    }

    // 定义一个获取食物X轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }

    // 定义一个获取食物Y轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }

    // 修改食物的位置
    change() {
        // 生成一个随机的位置
        // 食物的位置最小是0 最大是290
        // 蛇移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是整10
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

// 测试代码
// const food =  new Food();
// console.log(food.X, food.Y);
// food.change();
// console.log(food.X, food.Y);

export default Food;

// //食物类
// class Food {

// 	element: HTMLElement;

// 	constructor() {
// 		this.element = document.getElementById('#food')!;
// 	}
// 	//获取X坐标
// 	get X() {
// 		return this.element.offsetLeft;
// 	}
// 	//获取Y坐标
// 	get Y() {
// 		return this.element.offsetTop;
// 	}
// 	//刷新位置
// 	feachLocation() {
// 		let left = Math.round(Math.random() * 29) * 10
// 		let top = Math.round(Math.random() * 29) * 10
// 		this.element.style.left = left + 'px';
// 		this.element.style.top = top + 'px';
// 	}
// }
// export default Food;
// class ScorePanel {
// 	private score: number = 0;
// 	private level: number = 1;
// 	private scoreContainer: HTMLElement;
// 	private levelContainer: HTMLElement;
// 	maxLevel: number = 10; //最大等级


// 	constructor(maxLevel:number) {
// 		this.scoreContainer = document.getElementById('#score')!;
// 		this.levelContainer = document.getElementById('#level')!;
// 		this.maxLevel = maxLevel;
// 	}
// 	//增加分数
// 	addScore() {
// 		this.score++;
// 		this.scoreContainer.innerHTML = this.score + '';
// 		if (this.score % 20 === 0) {
// 			this.addLevel()
// 		}
// 	}

// 	//等级提升
// 	addLevel() {
// 		if (this.level < 10) {
// 			this.level++;
// 			this.levelContainer.innerHTML = this.level + '';
// 		}
// 	}
// }

// class Sanck {

// 	constructor() {
		
// 	}

// 	eat() {

// 	}
// 	move() {

// 	}
// }