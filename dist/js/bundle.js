(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";var randomNum=function(t){return Math.ceil(Math.random()*t)},randomStr=function(){return Math.random().toString(36).substr(2)},getNodeDom=function(t){return'<span class="tree-switcher tree-switcher_close tree-node">'+t.text+"</span>"},getChildDom=function t(r){if(0===r.length)return"";var e='<ul class="tree-child-tree">';return r.map(function(r){return e+="<li>",e+=getNodeDom(r.data),0===r.children.length?e+="</li>":e+=t(r.children),null}),e+="</ul>"},randomData=function t(r,e){var n=[];if(0===r||0===e)return n;for(var o=0;o<r;o+=1){var a={data:{id:randomStr(),text:randomStr()},children:[]};a.children=t(randomNum(5),e-1),n.push(a)}return n},setTreeContent=function(){var t=document.getElementById("tree"),r={root:{data:{id:"d9f0899f4fdf",text:"根节点"},children:randomData(randomNum(2),3)}};t.innerHTML=getNodeDom(r.root.data)+getChildDom(r.root.children)};setTreeContent();
},{}]},{},[1]);
