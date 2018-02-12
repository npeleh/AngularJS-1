var taskList = angular.module("taskList", []);
taskList.controller("taskCtrl", function () {
    var vm = this;
    vm.addTask = "";
    vm.editTask = "";
    vm.taskArr = [
		{
			name: "CSS",
			done: false 
		},
		{
			name: "JavaScript",
			done: false 
		},
		{
			name: "HTML",
			done: false 
		},
		{
			name: "Angular",
			done: false 
		}
	];
    vm.newTask = function () {
        if (vm.addTask) {
            vm.taskArr.push({name: vm.addTask, done: false});
            vm.addTask = "";
        }
    };
    vm.delete = function($index){
        vm.taskArr.splice($index, 1);
    };
    
    vm.edit = function($index, item){
        vm.editTask = item;
		vm.indexTask = $index;
    };

    vm.save = function(){
        vm.taskArr[vm.indexTask].name = vm.editTask;
        vm.editTask = "";
    };
})