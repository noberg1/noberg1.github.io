---
layout: post
title:  "How To Check Django Version"
author: Noah
categories: [ Django, Web development ]
tags: [django, python]
image: assets/images/django-version.png
description: "This is how you check what version of Django you have installed"
---
We sometimes wonder what version of a particular software we have currently installed. Unfortunately, it is not always the same procedure when using different software. 

In this article, I will show you how to check which version of Django you have currently installed on your computer/server. 

Note that I am currently doing this on a Linux-machine(Ubuntu 20.04) and it might be different on other operating systems.

Next, a small second disclaimer, I am currently using Python 3 and on some computers, you might have to type python3 instead of python, like I do, if you for example also have python 2 installed separately.

1. Open up your terminal of choice and type `python`. This will start the Python interpreter. 
2. When inside the Python interpreter you first type `import Django`. This will import your current Django installation.
3. Lastly, type `django.VERSION` and the output will tell you what version you have installed.

It is as simple as that. It might be hard to find the right procedure at first but when you know how to do it it is not hard at all.

