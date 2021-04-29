# Compilation

## Contents

 - [01 - Compiling our first program](#01)

---

<div id="01"></div>

## 01 - Compiling our first program

Well, first of all you have to know that the **C++ Programming Language** is a **compiled language**.

We are not going to focus on that concept right now, but right from the start you should know that whenever you change your program you should compile the code and only then see the changes.

One of the most famous compilers for **C/C++** is **gcc/g ++**. See below how easy it is to compile your first program:

[hello_world.cc](src/hello_world.cc)
```cc
#include <iostream>

using namespace std;

main()
{
  cout << "Hello World!!!";
}
```

**NOTE:**  
To compile the above code is very simple, just for the file directory is to run:

```md
// MODEL
g++ hello_world.cc -o any-name

g++ hello_world.cc -o helloWorld
```

**NOTE:**  
This will generate our executable file... Now just run it:

```md
./helloWorld
```

**OUTPUT:**  
```cc
Hello World!!!
```

---

**REFERENCES:**  
[Basics - GeeksforGeeks](https://www.geeksforgeeks.org/c-plus-plus/#Basics)  

---

**Rodrigo Leite -** *Software Engineer*
