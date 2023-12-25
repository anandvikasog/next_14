# Metadata
Metadata can be set by

 - Exporting a static **metadata** object.
 - Exporting a dynamic **generateMetadata** function (this function can be asynchronous also, if we want to fetch some data through api)

From **page.tsx** or **layout.tsx** at any level of folder structure.

> Components marked with "use client" cannot do this.

**Priority order**

 1. **page.tsx** has higher priority then **layout.tsx**
 2. More the level of nesting , more the priority

# Project organising tips
## File colocation
Components which are **default** **exported** from **page.js** or **page.tsx** are rendered in browser
## private routes
Folders (and their sub-folders) named with prefix **`_`** or **`%5F`** are not delivered to browsers.
**Example:** 

    |-dashboard
    |	-page.tsx
    |-about
    |	-page.tsx
    |-_components
    |	-page.tsx
    |-%5Futils
    |	-page.tsx

here, **http://localhost:3000/_components** or **http://localhost:3000/%5Futils** will render 404page

## route groups
Folders name wrapped with `()` are not taken as route segment
**Example**

    |-dashboard
    |	-page.tsx
    |-(auth)
    |	-login
    |		-page.tsx
    |	-signup
    |		-page.tsx
    |-page.tsx
here, route of login page will be **http://localhost:3000/login**  instead of **http://localhost:3000/(auth)/login** . Also the signup page.

## layout groups
We can make use of route groups to group some routes in a single layout
**Example**

    |-dashboard
    |	-page.tsx
    |-(auth)
    |	-layout.tsx [groupped layout]
    |	-login
    |		-page.tsx
    |		-layout.tsx [nested layout]
    |	-signup
    |		-page.tsx
    |		-layout.tsx [nested layout]
    |-page.tsx
    |-layout.tsx [root layout]
    
here, **groupped layout** will be shared by both **http://localhost:3000/login** and **http://localhost:3000/signup** as a wrapper around **nested layout**

# Link component

## replace 

    <Link href="/dashboard" replace>Dashboard<Link>
This will replace the top entry in history stack with "**/dashboard**"

# useRouter()

    const router = useRouter();

###  router.back()
To go 1 level **down** in history stack
###  router.forward()
To go 1 level **up** in history stack
###  router.replace("/some-route")
To **replace** the top entry of history stack with "**/some-route**"
###  router.push("/some-route")
To **push** the route "**/some-route**"  in  history stack.

# layout v/s template
|layout| template |
|--|--|
| if two pages share the same layout then, When the page is changed the layout component will only re-render the changed children i.e, page and the layout component itself will not be re-rendered (if not done intentionally) | if two pages share the same template then, When the page is changed both page and template component itself will re-render |

We can use both **layout.tsx** and **template.tsx** in a route. In that case, **page.tsx** will render inside **template.tsx** and **template.tsx** will render inside **layout.tsx**

## loading.tsx

 - This file is rendered in between (until the page content is loaded), when we navigate between two routes.
 - This also follows the **layout.tsx** type hierarchy. *Example*: If **loading.tsx** is kept in parent folder of a nested routes, then it will be shown for all the routes that are nested under that folder. Priority order will also be same as **layout.tsx**.

## error.js
This makes a error boundary across the **page.tsx**. If page.tsx has error, then instead of crashing the application, the error will be catched by **error.tsx** and a fallback UI will be rendered on DOM.
This also follows the **layout.tsx** type hierarchy. **error.tsx** in parent will work for all the nested routes under that folder.

Levels of files (in a folder) - *parent to child*
`layout.tsx` -> `template.tsx` -> `error.tsx` -> `loading.tsx` -> `error.tsx` -> `page.tsx`

### Resetting the error

default component in error.js file also receives a "**reset**" function, which reloads the page.tsx. This may be helpful if re-loading the page.tsx could resolve the error.

*Since layout.tsx is rendered as a parent of error.tsx the error occured in layout.tsx is not handled by error.tsx (in the same folder). In this case the error will be cought by the one which is located in the uper level of folder hierarchy.*

## Slots / parallel-routes
These are the folders, whose name is prefix with `@`symbol, and has the ability to be rendered at a same route and be passed at a same `layout.tsx` as a prop.
***Example:***
	

    |-layout.tsx
    |-page.tsx
    |-@section1
    |	-page.tsx
    |-@section2
    |	-page.tsx
    |-@section2
    |	-page.tsx
        
in **layout.tsx**

    export default function Layout({
      children,
      section1,
      section2,
      section3,
    }: {
      children: React.ReactNode;
      section1: React.ReactNode;
      section2: React.ReactNode;
      section3: React.ReactNode;
    }) {
      return (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {section1}
            {children}
            {section2}
          </div>
          <div>{section3}</div>
        </div>
      );
    }

 - A clear benefit of parallel-routes is their ability to split a single layout into multiple slots, making the code more manageable.
 - A parallel route behaves same as a normal route. It can have it's own "**error**", "**loading**", "**layout**", "**template**" or other files that a normal route has, and would behave normally as expected.
 - Each **slot/ parallel-route** can essentially function as a mini application, complete with it's own navigation and state management.

**Example:**

    |-layout.tsx
    |-page.tsx
    |-child
    |	-page.tsx
    |-@section1
    |	-page.tsx
    |	-child
    |		-page.tsx
    |-@section2
    |	-page.tsx
    |-@section2
    |	-page.tsx

*Here the two slots "section1" and "children" (i.e, page.tsx of root level) have nested route which is "/child". So, at the rote "/child" the "section1" and "children" will be replaced by the corresponding nested route but "section2" and "section3" will remain same as before because they do not have "child" nested page under them.* 

*In this case if we reload the browser at "/child" route, next.js will search for the "child" route in all the slots at that level, and if any slot fail to provide that route then next.js will render a 404 page for the whole "/child" route.*

*To handle this scenario we need to define "default.tsx" file in "section2" and section3" slot.  This will be rendered as a fallback if no route is matched under the slot.*

**Example**:
  

	    |-layout.tsx
        |-page.tsx
        |-child
        |	-page.tsx
        |-@section1
        |	-page.tsx
        |	-child
        |		-page.tsx
        |-@section2
        |	-page.tsx
        |	-default.tsx
        |-@section2
        |	-page.tsx
        |	-default.tsx

## Intercepting routes ??
Didn't find useful as of now! please study at below link if needed.
[https://www.youtube.com/watch?v=nr_kRfTJfKc](https://www.youtube.com/watch?v=nr_kRfTJfKc)