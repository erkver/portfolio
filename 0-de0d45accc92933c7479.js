(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,a){"use strict";var n=a(6),l=a.n(n),r=a(0),c=a.n(r),i=(a(149),function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return c.a.createElement("div",{id:"footer"},c.a.createElement("div",{className:"inner"},c.a.createElement("ul",{className:"icons"},c.a.createElement("li",null,c.a.createElement("a",{href:"https://twitter.com/ErkverWuzHur?lang=en",className:"icon fa-twitter"},c.a.createElement("span",{className:"label"},"Twitter"))),c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/erkver",className:"icon fa-github"},c.a.createElement("span",{className:"label"},"Github"))),c.a.createElement("li",null,c.a.createElement("a",{href:"https://linkedin.com/in/eric-vere",className:"icon fa-linkedin"},c.a.createElement("span",{className:"label"},"Dribbble"))),c.a.createElement("li",null,c.a.createElement("a",{href:"mailto:eric.c.vere@gmail.com",className:"icon fa-envelope-o"},c.a.createElement("span",{className:"label"},"Email"))))))},t}(c.a.Component)),s=a(150),o=a.n(s),m=a(151),u=a.n(m),d=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=function(){t.setState({visible:!0},function(){document.addEventListener("click",t.handleOutsideClick)})},t.handleOutsideClick=function(){t.setState({visible:!1},function(){document.removeEventListener("click",t.handleOutsideClick)})},t.state={visible:!1},t}return l()(t,e),t.prototype.render=function(){var e=this,t=this.state.visible;return c.a.createElement("header",{id:"header"},c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"nav-content"},c.a.createElement("button",{className:"hamburger hamburger--collapse "+(t?"is-active":""),onClick:this.handleClick},c.a.createElement("span",{style:{marginTop:"10px"},className:"hamburger-box"},c.a.createElement("span",{className:"hamburger-inner"}))),c.a.createElement("div",{className:"logo-tt"},c.a.createElement("p",{className:"title"},"Eric Vere"),c.a.createElement("img",{className:"my-logo",src:u.a,alt:""})))),c.a.createElement("div",{className:"inner"},c.a.createElement("img",{className:"image avatar",src:o.a,alt:""}),c.a.createElement("h1",null,c.a.createElement("strong",null,"I am Eric Vere"),",",c.a.createElement("br",null)," developer, cat-dad, and music enthusiast."),c.a.createElement("div",{className:"link-cont "+t},c.a.createElement("h3",{onClick:function(){document.getElementById("main").scrollIntoView(!0),e.setState({visible:!1})}},"About Me"),c.a.createElement("h3",{onClick:function(){document.getElementById("two").scrollIntoView(!0),e.setState({visible:!1})}},"Projects"),c.a.createElement("h3",{onClick:function(){document.getElementById("three").scrollIntoView(!0),e.setState({visible:!1})}},"Contact Me"))),c.a.createElement(i,null))},t}(c.a.Component),b=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props.children;return c.a.createElement("div",null,c.a.createElement(d,null),e)},t}(c.a.Component);t.a=b},149:function(e,t,a){},150:function(e,t,a){e.exports=a.p+"static/avatar-a0fa73cd6d41f5caddab6c48b72df1ad.png"},151:function(e,t){e.exports="data:image/png;base64,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rMPf9JGVlYX9+/dzMt7hw4fx8+dPTnwBYRAkUoVmAoGAsrh6CHZxDxSRSAS3283p1y84//QUCgX+++8/rt1SEAqFPu9qzGaz328vaTSagGqT6aisrKTdIIYC52uISCTCnTt3YLVaw/YMen19Ha9fv2bsYzAYoNPpfLbHx8fj9u3bsFqtPrPIvhAIBIiPj0dTU1NIFf10hGVRl0gkyMjICIdrDA0N4fnz55TE3k48iztTYURcXFxQReNWqxWPHz/G4uJiwMf6I2YK5YC/Z31TUxOrK29tbQ0/fvzwSqNzgclkwrNnz8L2pdaYEMTtduPt27cBP2fo6OjgVJDPnz+jpaUlrNWTQQuytLREmxfiGofDgRcvXgS1Ex4eHsbk5CRtoUMguFwuvHr1Cp2dnSH5YUPQd1mtra2YnZ0N29nidrsxNTWFhoaGkNISjY2NMJvNcDgcAR/rdDoxNjaGR48eRUQMIIQrZHR0FPfv3+cylrAwNzeHhoaGaIfBmn9upx7r8IIQBi8IYfCCEAYvCGHwghAGLwhh8IIQBuPGsLS0lPEHG3kCx18NGKMgCoViV3zRkiS8piyLxRKtOHYtO0tPvQTR6/VheejCQ4/dbqf8LrLXlGWz2fDgwQNotVpkZ2dHNDg6FAoFJz/Vtx273c5JDW6oWCwW6PV65n9HAP6KQsqvWVdVVeHMmTOc+vSk9EmFv+0lDF4QwuAFIQxeEMLgBSEMXhDC4AUhDF4QwuAFIQxiSkk9fyGXkJDgZeMalUqF+vr6rdd2ux16vZ6YxCoxgpSVlUXkb/sSEhIoebqpqSlekJ0YjUaoVKqI/leHBy6/khYqxAiysLCAp0+fRjuMqMMv6oTBC0IYvCCEwQtCGLwghMELQhi8IITBC0IYvCCEwQtCGLwghPE/vlJh4RkxLbwAAAISaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pgo8eDp4bXBtZXRhIHhtbG5zOng9J2Fkb2JlOm5zOm1ldGEvJyB4OnhtcHRrPSdJbWFnZTo6RXhpZlRvb2wgMTAuMTAnPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5kcnVtbWVyMzFkdWRlPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+xvbKPgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=0-de0d45accc92933c7479.js.map