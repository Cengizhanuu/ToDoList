var $ = require('jquery');
module.exports = function () {

    $('.toDoList-addlist button').on('click', addButtonClickEvent);

    $('.toDoList-addlist input').on('focus', inputFocusEvent);

    function addButtonClickEvent() {
        addList();
    }

    function addList() {
        var intElem = $('.toDoList-addlist input').val();
        if($('.toDoList-addlist input').val() == ""){
            return false;
        } else {
            $('.toDoList-screen ul').append('<li>' + intElem + '<a href="javascript:;" class="remove-button">SİL</a></li>');
        }
        $('.toDoList-screen ul li .remove-button').off('click', removeButtonClick);
        $('.toDoList-screen ul li .remove-button').on('click', removeButtonClick);
        toggleDescription();
    }

    function removeButtonClick() {
        $(this).parent('li').remove();
        toggleDescription();
    }

    function inputFocusEvent() {
        $(this).select();
        toggleDescription();

    }

    function toggleDescription() {
        var listArray = $('.toDoList-screen ul li').not('.description');
        if(listArray.length === 0){
            $('.toDoList-screen ul li.description').show();
        }else{

            $('.toDoList-screen ul li.description').hide();
        }
    }
};
