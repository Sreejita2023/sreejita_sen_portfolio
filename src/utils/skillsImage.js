import gcp from "../assests/svg/skills/gcp.svg"
import html from '../assests/svg/skills/html.svg'
import photoshop from '../assests/svg/skills/photoshop.svg'
import illustrator from '../assests/svg/skills/illustrator.svg'
import docker from '../assests/svg/skills/docker.svg'
import adobeXd from '../assests/svg/skills/adobe-xd.svg'
import afterEffects from '../assests/svg/skills/after-effects.svg'
import css from '../assests/svg/skills/css.svg'
import angular from '../assests/svg/skills/angular.svg'
import javascript from '../assests/svg/skills/javascript.svg'
import nextJS from '../assests/svg/skills/nextJS.svg'
import nuxtJS from '../assests/svg/skills/nuxtJS.svg'
import react from '../assests/svg/skills/react.svg'
import svelte from '../assests/svg/skills/svelte.svg'
import typescript from '../assests/svg/skills/typescript.svg'
import vue from '../assests/svg/skills/vue.svg'
import bootstrap from '../assests/svg/skills/bootstrap.svg'
import bulma from '../assests/svg/skills/bulma.svg'
import capacitorjs from '../assests/svg/skills/capacitorjs.svg'
import coffeescript from '../assests/svg/skills/coffeescript.svg'
import memsql from '../assests/svg/skills/memsql.svg'
import mongoDB from '../assests/svg/skills/mongoDB.svg'
import mysql from '../assests/svg/skills/mysql.svg'
import postgresql from '../assests/svg/skills/postgresql.svg'
import tailwind from '../assests/svg/skills/tailwind.svg'
import vitejs from '../assests/svg/skills/vitejs.svg'
import vuetifyjs from '../assests/svg/skills/vuetifyjs.svg'
import c from '../assests/svg/skills/c.svg'
import cplusplus from '../assests/svg/skills/cplusplus.svg'
import csharp from '../assests/svg/skills/csharp.svg'
import dart from '../assests/svg/skills/dart.svg'
import go from '../assests/svg/skills/go.svg'
import java from '../assests/svg/skills/java.svg'
import julia from '../assests/svg/skills/julia.svg'
import kotlin from '../assests/svg/skills/kotlin.svg'
import matlab from '../assests/svg/skills/matlab.svg'
import php from '../assests/svg/skills/php.svg'
import python from '../assests/svg/skills/python.svg'
import ruby from '../assests/svg/skills/ruby.svg'
import swift from '../assests/svg/skills/swift.svg'
import adobeaudition from '../assests/svg/skills/adobeaudition.svg'
import aws from '../assests/svg/skills/aws.svg'
import deno from '../assests/svg/skills/deno.svg'
import django from '../assests/svg/skills/django.svg'
import firebase from '../assests/svg/skills/firebase.svg'
import gimp from '../assests/svg/skills/gimp.svg'
import git from '../assests/svg/skills/git.svg'
import graphql from '../assests/svg/skills/graphql.svg'
import lightroom from '../assests/svg/skills/lightroom.svg'
import materialui from '../assests/svg/skills/materialui.svg'
import nginx from '../assests/svg/skills/nginx.svg'
import numpy from '../assests/svg/skills/numpy.svg'
import opencv from '../assests/svg/skills/opencv.svg'
import premierepro from '../assests/svg/skills/premierepro.svg'
import pytorch from '../assests/svg/skills/pytorch.svg'
import selenium from '../assests/svg/skills/selenium.svg'
import strapi from '../assests/svg/skills/strapi.svg'
import tensorflow from '../assests/svg/skills/tensorflow.svg'
import webix from '../assests/svg/skills/webix.svg'
import wordpress from '../assests/svg/skills/wordpress.svg'
import nodeJS from '../assests/svg/skills/nodeJS.png'
import azure from '../assests/svg/skills/azure.svg'
import blender from '../assests/svg/skills/blender.svg'
import fastify from '../assests/svg/skills/fastify.svg'
import figma from '../assests/svg/skills/figma.svg'
import flutter from '../assests/svg/skills/flutter.svg'
import haxe from '../assests/svg/skills/haxe.svg'
import ionic from '../assests/svg/skills/ionic.svg'
import markdown from '../assests/svg/skills/markdown.svg'
import microsoftoffice from '../assests/svg/skills/microsoftoffice.svg'
import picsart from '../assests/svg/skills/picsart.svg'
import sketch from '../assests/svg/skills/sketch.svg'
import unity from '../assests/svg/skills/unity.svg'
import wolframalpha from '../assests/svg/skills/wolframalpha.svg'
import redux from '../assests/svg/skills/redux.svg'
import canva from '../assests/svg/skills/canva.svg'
import expressJS from '../assests/svg/skills/expressJS.png'
import postman from '../assests/svg/skills/postman.svg'
import github from '../assests/svg/skills/github.png'
import androidstudio from '../assests/svg/skills/androidstudio.svg'
import vscode from '../assests/svg/skills/vscode.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'gcp':
            return gcp;
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'docker':
            return docker;
        case 'illustrator':
            return illustrator;
        case 'adobe xd':
            return adobeXd;
        case 'after effects':
            return afterEffects;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'nuxt js':
            return nuxtJS;
        case 'react':
            return react;
        case 'svelte':
            return svelte;
        case 'typescript':
            return typescript;
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        case 'bulma':
            return bulma;
        case 'capacitorjs':
            return capacitorjs;
        case 'coffeescript':
            return coffeescript;
        case 'memsql':
            return memsql;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'vuetifyjs':
            return vuetifyjs;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'c#':
            return csharp;
        case 'dart':
            return dart;
        case 'go':
            return go;
        case 'java':
            return java;
        case 'kotlin':
            return kotlin;
        case 'julia':
            return julia;
        case 'matlab':
            return matlab;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'ruby':
            return ruby;
        case 'swift':
            return swift;
        case 'adobe audition':
            return adobeaudition;
        case 'aws':
            return aws;
        case 'deno':
            return deno;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'gimp':
            return gimp;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'lightroom':
            return lightroom;
        case 'materialui':
            return materialui;
        case 'nginx':
            return nginx;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'premiere pro':
            return premierepro;
        case 'pytorch':
            return pytorch;
        case 'selenium':
            return selenium;
        case 'strapi':
            return strapi;
        case 'tensorflow':
            return tensorflow;
        case 'webix':
            return webix;
        case 'wordpress':
            return wordpress;
        case 'azure':
            return azure;
        case 'blender':
            return blender;
        case 'fastify':
            return fastify;
        case 'figma':
            return figma;
        case 'flutter':
            return flutter;
        case 'haxe':
            return haxe;
        case 'ionic':
            return ionic;
        case 'markdown':
            return markdown;
        case 'microsoft office':
            return microsoftoffice;
        case 'picsart':
            return picsart;
        case 'sketch':
            return sketch;
        case 'unity':
            return unity;
        case 'wolframalpha':
            return wolframalpha;
        case 'canva':
            return canva;
        case 'node js':
            return nodeJS;
        case 'redux':
            return redux;
        case 'vscode':
            return vscode;
        case 'androidstudio':
             return androidstudio;
        case 'express js':
             return expressJS;
        case  'postman':
            return postman;
        case 'github':
            return github;     
        default:
            break;
    }
}
