
>[!definition] 可分元与不可分元
>设 $F< E$，$\alpha\in E$ 在 $F$ 上代数。若 $\min(\alpha,F)$ （在任何扩域上都）无重根，则称 $\alpha$ 是可分的；否则称 $\alpha$ 不可分。
>
>一个不可约多项式 $p(x)\in F[x]$ 称为可分，如果它无重根。

>[!definition] 可分扩张
>设 $F < E<\overline F$。若对任意 $\alpha\in E$，$\alpha$ 都在 $F$ 上可分，则称 $E/F$ 是可分扩张。

由于极小多项式都是不可约多项式，我们关心不可约多项式是否可分。

>[!comment]
>Recall：非常数不可约多项式 $f$ 在 $F$ 上无重根 $\iff (f,f')=1 \iff f'\neq0$。
>第一个等价由[[多项式环与因式分解判别法]]给出，第二个等价解释如下。
>若 $f'=0$ 则 $(f,f')=(f,0)=f.$
>若 $f' \neq 0$ ，设 $d=(f,f')$ ，则 $d \sim 1\text{ or } d \sim f.$ 若 $d \sim f$ 则 $f \mid f'$ 矛盾。
>因此 $d \sim 1.$
>
>若 $\operatorname{char}F=0$，则非零非常数多项式满足 $f'\neq0$。因此在特征 $0$ 中，非常数不可约多项式都是可分的。

>[!theorem] 有限域是可分域
>若 $F$ 是有限域，则任意不可约多项式 $f\in F[x]$ 都可分。因此有限域上的有限扩张都是可分扩张。

>[!proof]
>设 $F$ 是有限域，$\operatorname{char}F=p$，$|F|=q=p^r$。若不可约多项式 $f$ 有重根，则 $f'=0$，所以 $f(x)=g(x^p)=a_0+a_1x^p+\cdots+a_nx^{pn}$。
>因为 $F^*=\langle \alpha\rangle$，且 $|F^*|=q-1$，对任意 $a\in F$ 有 $\alpha^{{p^{r-1}p}}=\alpha$ ，$\forall\alpha \in F,\exists \beta^{p}=\alpha.$
>于是可写成 $f(x)=b_{0}^{p}+b_{1}^{p}x^{p}+\cdots+b_{n}^{p}x^{pn}=(b_0+b_1x+\cdots+b_nx^n)^p.$
>这说明 $f$ 可约，矛盾。
>因此 $f$ 无重根，有限域是可分域。$\blacksquare.$

下面给出 Galois 扩张的定义。

>[!definition] Galois 扩张
>设 $F< E<\overline F$。若 $E/F$ 正规且可分，则称 $E/F$ 是 Galois 扩张。

>[!comment]
>若 $F(\alpha)/F$ 正规且可分，则 $|G_F(F(\alpha))|=[F(\alpha):F]=\deg \min(\alpha,F).$
>
>设 $F< E<\overline F$，$F< L< E$。则 $G_L(E)< G_F(E)$。

>[!theorem]
>若 $F< E <\overline F$ 是有限 Galois 扩张，则 $|G_F(E)|=[E:F]$。

>[!proof]
>记 $Hom_{F}(E,\overline{F})$ 为所有 $F$-嵌入 $E \to \overline{F}.$
>$E / F$ 是有限扩张，$E=F(\alpha_{1},\cdots,\alpha_{n})$ ，考虑 $F a, F(\alpha_{1}) < \cdots < E.$
>每一步中，由于 $\min(\alpha_{i},F)$ 可分，无重根，该步中嵌入的拓展个数和扩度一样大（就是[[域嵌入、正规扩张与Galois群]]末尾的性质）。
>因此 $|Hom_{F}(E,\overline{F})|=[E:F].$
>取 $\sigma \in Hom_{F}(E,\overline{F}).$
>因为 $E / F$ 正规，因此 $\sigma(E)=E.$
>因此 $\sigma$ 是 $E \to E$ 的 $F$-自同构。
>因此 $|Hom_{F}(E,\overline{F})|=|G_F(E)|=[E:F].$ $\blacksquare.$

在最后介绍 Galois 理论之前，我们先介绍固定域：

>[!definition] 固定域
>若 $H<G_F(E)$，定义 $\operatorname{fix}(H)=\{\alpha\in E\mid \sigma(\alpha)=\alpha,\forall \sigma\in H\}.$
>
>对 $\alpha,\beta\in\operatorname{fix}(H)$，有 $\alpha\pm\beta,\alpha\beta,\alpha^{-1}\in\operatorname{fix}(H)$，因此 $\operatorname{fix}(H)$ 是域，$F<\operatorname{fix}(H)< E.$

>[!comment]
>若 $F< L< K< E$，则 $G_K(E)< G_L(E).$
>
>若 $H< S< G_F(E)$，则 $\operatorname{fix}(S)<\operatorname{fix}(H).$

不加证明地给出 Galois 理论：

>[!theorem] Galois 理论
>设 $F< E$ 是有限 Galois 扩张。令 $\mathcal P=\{L| F< L< E\}$，$\mathcal G=\{H| H< G_F(E)\}.$
>
>则 $\mathcal P$ 与 $\mathcal G$ 存在一一对应的互逆映射：$G_{(\cdot)}(E):\mathcal P\to\mathcal G$ 与 $\operatorname{fix}(\cdot):\mathcal G\to\mathcal P$。
>
>1. 对任意 $L\in\mathcal P$，$\operatorname{fix}(G_L(E))=L$。
>2. 对任意 $H\in\mathcal G$，$G_{\operatorname{fix}(H)}(E)=H$。
>3. 若 $F\subset L\subset K\subset E$，则 $[K:L]=[G_L(E):G_K(E)]$。
>4. 若 $\{1\}\subset H\subset S\subset G_F(E)$，则 $[S:H]=[\operatorname{fix}(H):\operatorname{fix}(S)].$
