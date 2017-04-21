(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $ = require('jquery');
var todo = require('./todo');

todo();
},{"./todo":2,"jquery":"jquery"}],2:[function(require,module,exports){
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

},{"jquery":"jquery"}]},{},[1,2]);
