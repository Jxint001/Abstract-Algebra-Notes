
先介绍理想之间的运算，这是为中国剩余定理和理想分解做准备。

>[!definition] 和理想
>设 $I,J< R$ 是理想。定义 $I+J \triangleq\{a+b\mid a\in I,\ b\in J\}.$ 容易验证它是包含 $I,J$ 的最小理想。
>
>如果 $I=\langle \alpha_1,\dots,\alpha_n \rangle,\; J=\langle \beta_1,\dots,\beta_m \rangle$，那么 $I+J=\langle \alpha_1,\dots,\alpha_n,\beta_1,\dots,\beta_m \rangle.$ 

>[!definition] 交理想
>设 $I,J< R$ 是理想。$I\cap J$ 仍然是理想。容易验证它是同时包含在 $I$ 和 $J$ 中的最大理想。

>[!definition] 乘积理想
>设 $I,J< R$ 是理想。定义 $IJ \triangleq \left\{\sum_k a_kb_k\mid a_k\in I,\ b_k\in J\right\}.$ 每个 $k$ 都是**有限**的。
>
>如果 $I=\langle \alpha_1,\dots,\alpha_n \rangle,\; J=\langle \beta_1,\dots,\beta_m \rangle$，那么 $IJ=\langle \alpha_i\beta_j\mid 1\le i\le n,\ 1\le j\le m \rangle.$
>
通常有$IJ\subseteq I\cap J.$

乘积理想的引入主要是为了做理想分解。

>[!example]
>$\mathbb{Z}$ 中，$\langle 2 \rangle\langle 3 \rangle=\langle 6 \rangle.$

有时候元素的分解不唯一，但是理想的分解却是唯一的。

>[!example]
>环 $R=\mathbb Z[\sqrt{-5}]$ 是整环而不是 UFD，因为 $6=2\cdot 3=(1+\sqrt{-5})(1-\sqrt{-5}).$ 这些因子在 $\mathbb{Z}[\sqrt{ -5 }]$ 中都可以证明是不可约元，所以元素分解不唯一。
>
>定义 $\mathfrak a_1=\langle 3,1+\sqrt{-5}\rangle$ ，$\mathfrak a_2=\langle 3,1-\sqrt{-5}\rangle$ ，$\mathfrak b=\langle 2,1+\sqrt{-5}\rangle.$
>
>$\mathfrak a_1\mathfrak a_2=\langle 3,1+\sqrt{-5}\rangle\langle 3,1-\sqrt{-5}\rangle=\langle 9,\ 3+3\sqrt{-5},\ 3-3\sqrt{-5},\ 6\rangle.$
>这些生成元全都在 $\langle 3\rangle$ 里，所以 $\mathfrak a_1\mathfrak a_2\subseteq \langle 3\rangle.$
>因为 $9-6=3$，且 $9,6\in \mathfrak a_1\mathfrak a_2$，所以 $3\in \mathfrak a_1\mathfrak a_2.$
>因此 $\langle 3\rangle=\mathfrak a_1\mathfrak a_2.$
>
>因为 $\mathfrak b^2=\langle 2,1+\sqrt{-5}\rangle^2=\langle 4,\ 2(1+\sqrt{-5}),\ (1+\sqrt{-5})^2\rangle.$
>这些都在 $\langle 2\rangle$ 中，所以 $\mathfrak b^2\subseteq \langle 2\rangle.$
>另一方面，可以从这些生成元线性组合出 $2.$
>所以 $\langle 2\rangle=\mathfrak b^2.$
>
>类似地，$\langle 1+\sqrt{-5}\rangle=\mathfrak a_1\mathfrak b$ ，$\langle 1-\sqrt{-5}\rangle=\mathfrak a_2\mathfrak b.$
>
>回到元素 $6$ ，$\langle 6\rangle=\langle 2\rangle\langle 3\rangle.$
>利用上面的理想分解：$\langle 2\rangle=\mathfrak b^2,\; \langle 3\rangle=\mathfrak a_1\mathfrak a_2.$
>又 $\langle 6\rangle=\langle 1+\sqrt{-5}\rangle\langle 1-\sqrt{-5}\rangle.$ $\langle 1+\sqrt{-5}\rangle=\mathfrak a_1\mathfrak b,\; \langle 1-\sqrt{-5}\rangle=\mathfrak a_2\mathfrak b,$
>$\langle 6\rangle=(\mathfrak a_1\mathfrak b)(\mathfrak a_2\mathfrak b)=\mathfrak a_1\mathfrak a_2\mathfrak b^2.$
>这和第一种分解是一样的。
>
>在合适的环里，任意非零真理想 $I$ 都可以唯一分解成素理想的乘积。

>[!definition] 环的直积（有限直积环）
>设 $R_1,\dots,R_n$ 是环，定义 $\prod_{i=1}^{n}R_{i}=R_1\times\cdots\times R_n \triangleq \{ (a_1,\dots,a_n) \mid a_i\in R_i \}.$
>
>类似群的直积/直和，加法、乘法逐坐标定义：
>$(a_1,\dots,a_n)+(b_1,\dots,b_n)=(a_1+b_1,\dots,a_n+b_n)$ ，
>$(a_1,\dots,a_n)(b_1,\dots,b_n)=(a_1b_1,\dots,a_nb_n).$

>[!comment]
>1. 容易验证 $\prod_{i=1}^{n}R_{i}$ 是环。
> 	  - $0=(0,\cdots,0).$
> 	  - $1=(1,\cdots,1).$（如果每个 $R_{i}$ 都含幺。）
>2. 有限个环的直积也常写成 $R_1\oplus\cdots\oplus R_n.$

在介绍中国剩余定理（CRT）之前，先介绍下面这个引理，它描述互素理想的交等于理想的乘积。

> [!lemma]
> 设 $R$ 是**含幺交换环**，$I,J < R$ 是理想。若 $I+J=R$ ，称 $I,J$ 互素，且 $I\cap J=IJ.$

> [!proof]  
> 首先证明 $IJ\subseteq I\cap J.$
> 
> 任取 $x\in IJ$ 则 $x$ 可以写成有限和 $x=\sum_k a_kb_k,\; a_k\in I,\ b_k\in J.$
> 
> 因为 $I,J$ 都是理想，所以每一项 $a_kb_k\in I$，$a_kb_k\in J$。
> 因此 $x\in I\cap J.$
> 所以 $IJ\subseteq I\cap J.$
> 
> 反过来，因为 $I+J=R$ ，所以存在 $u\in I,\; v\in J$ 使得 $u+v=1.$
> 任取 $x\in I\cap J$ 则 $x=x\cdot 1=x(u+v)=xu+xv.$
> $x\in J,\ u\in I \implies xu \in IJ.$
> $x\in I,\ v\in J \implies xv \in IJ.$
> 因此 $x=xu+xv\in IJ.$
> 所以 $I\cap J\subseteq IJ.$
> 
> 综上，$I \cap J =IJ.$

> [!theorem] 中国剩余定理（CRT）  
> 设 $R$ 是**含幺交换环**，$I_1,\dots,I_n< R$ 是理想，并且两两互素 $I_i+I_j=R,\; i\neq j.$
> 
> 令 $I=\bigcap_{i=1}^n I_i$ ，则 $R/I\cong R/I_1\oplus\cdots\oplus R/I_n.$
> 
> 其中同构由 $\alpha+I\longmapsto(\alpha+I_1,\dots,\alpha+I_n)$ 给出。

> [!proof]  
> 定义环同态 $\varphi:R\to R/I_1\oplus\cdots\oplus R/I_n$ 为 $\varphi(\alpha)=(\alpha+I_1,\dots,\alpha+I_n).$
> 显然 $\varphi$ 保持加法和乘法，所以是环同态。
> 
> $\alpha\in\ker\varphi \iff \alpha+I_i=I_i,\; \forall i.$ 即 $\alpha\in I_i,\; \forall i.$
> $\ker\varphi=\bigcap_{i=1}^n I_i=I.$
> 所以若能证明 $\varphi$ 是满射，则由[[环同态]]可得 $R/I\cong R/I_1\oplus\cdots\oplus R/I_n.$
> 
> 下面证明 $\varphi$ 满射。
> 
> 任取 $(x_1+I_1,\dots,x_n+I_n)\in R/I_1\oplus\cdots\oplus R/I_n.$
> 我们要构造 $\alpha\in R \; s.t.\;\alpha\equiv x_i\pmod {I_i},\; \forall i.$
> 
> 由于 $I_1+I_j=R,\; j=2,\dots,n$ ， 所以对每个 $j\geq 2$，存在 $a_j\in I_1$，$b_j\in I_j$，使得 $a_j+b_j=1.$
> 于是 $b_j=1-a_j\equiv 1\pmod {I_1}$ ，且 $b_j\in I_j.$
> 令 $\beta_1=b_2b_3\cdots b_n$ ，则 $\beta_1\equiv 1\pmod {I_1}.$
> 并且 $\forall j\neq 1$，由于 $\beta_1$ 中含有因子 $b_j\in I_j$，所以 $\beta_1\in I_j.$
> 因此 $\beta_1\equiv 0\pmod {I_j},\; j\neq 1.$
> 同理，对每个 $i=1,\dots,n$，可构造 $\beta_i\in R$ 满足 $\beta_i\equiv 1\pmod {I_i}$ 且 $\beta_i\equiv 0\pmod {I_j},\; j\neq i.$
> 
> 令 $\alpha=x_1\beta_1+\cdots+x_n\beta_n.$
> 则 $\forall i$，$\alpha\equiv x_1\beta_1+\cdots+x_n\beta_n\equiv x_i\beta_i\equiv x_i\pmod {I_i}.$
> 所以 $\varphi(\alpha)=(x_1+I_1,\dots,x_n+I_n).$
> 因此 $\varphi$ 是满射。$\blacksquare.$
