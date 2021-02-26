---
layout: post
title:  "How To Create a Jar File"
author: Noah
categories: [ Java ]
tags: [programming, coding, java]
image: assets/images/jar.jpg
featured: true
description: "This is how to create a jar file for your java-project"
---
In this tutorial, I will show you how to install Open-JDK and create a -jar file using java and javac. 

One of the biggest struggles most new java developers are facing is how to create a jar file for your project and make an executable. It is a bit of a hassle before you get a grip around it and understand what is going on. Most IDE:s offers a function that generates a jar file for you but in this tutorial, we will not cover that part but instead how you do it on your own using the JDK.

First of all, you will need to install the JDK-version of your choice. I am doing this on a Ubuntu machine(20.04) but the process should be almost the same for all UNIX-like systems. If you are on windows you can easily download and install your version of choice.

## Installing Open-JKD on ubuntu 20.04
If you are running Ubuntu you can do the following and if you already have JDK installed or are using another OS you can skip the following part and go straight to the compiling part. 

To install Open-jdk 8 you just run the following commands in the terminal:

```
$ sudo apt-get update
$ sudo apt-get install openjdk-8-jdk 
```

When the installation is completed you can verify it by typing:

```
$ java -version
```
```
openjdk version "1.8.0_242"
OpenJDK Runtime Environment (build 1.8.0_242-b09)
OpenJDK 64-Bit Server VM (build 25.242-b09, mixed mode)
```

## Creating the jar file

Now I will show you how to generate a jar file for your project. 

### Step 1. Compile your .java files
First, navigate to the folder containing all your .java files. These files are containing your source-code and are not yet compiled. 

Now we will use javac, which is the java compiler to convert our .java file to a .class file. You can do this by typing:

```
javac myClass.java
```
Change myClass.java to the name of your class. You will now see that the .class file was generated, in my case myClass.class was generated. 

### Step 2. Create a manifest
Next, we need to create a manifest file and add our entry-class to it. This tells the program where our main-method is so it knows where to start from. 

Create a new file, name it manifest.txt, and add the following content:
```
Main-Class: myClass
```
Where myClass is the .class file containing my main-method. Change it to your class containing your main-method.

### Step 3. Create the jar file
Now when we have compiled our class and made a manifest the last step is to create the actual jar. You do this by typing:
```
$ jar -cvfm myJar.jar manifest.txt myClass.class
``` 
That's it. A new jar file named myJar.jar will be created. To run this jar we simply type:
```
$ java -jar myJar.jar 
```
