
和群同态、环同态类似，我们也可以定义域中的同态。

>[!definition] 域嵌入
>设 $f:F\to R$ 是环同态。$Ker(f)$ 是 $F$ 的 ideal。因为 $F$ 是域，所以 $Ker(f)=F$ 或 $Ker(f)=\{ 0 \}$。
>
>若 $Ker(f)=F$，则 $f$ 是 $0$ 同态，平凡。
>若 $Ker(f)=\{ 0 \}$，则 $f$ 是单射，称 $f$ 为嵌入，记作 $f:F\hookrightarrow R$。

>[!definition] 拓展
>设 $F\subset E\subset\overline F$，$\tau:F\to\overline F$。
>若存在 $\sigma:E\to\overline F$，使得 $\sigma|_F=\tau$，则称 $\sigma$ 为 $\tau$ 的拓展。

>[!comment]
>若 $\iota:F\to F$ 是恒等映射，$\sigma:E\to\overline F$ 且 $\sigma|_F=\iota$，则称 $\sigma$ 为 $E$ 到 $\overline F$ 的 $F$-嵌入。

>[!theorem]
>$F < \overline{F}$，若 $\sigma: \overline{F} \to \overline{F}$ 是 $F$-嵌入，则 $\sigma(\overline{F})=\overline{F}.$

>[!proof]
>任取 $\alpha \in \overline{F}$ ，设 $\min(\alpha,F)=p(x)=\sum_{i=0}^{m}\beta_{i}x^{i} \in F[x].$
>设 $p(x)$ 在 $\overline{F}$ 中的根为 $\alpha_{1},\cdots,\alpha_{n}.$
>由于 $\sigma$ 是 $F$-嵌入，所以 $\sigma(\beta_{i})=\beta_{i}.$
>若 $p(\alpha_{k})=0$，则 $\sigma(p(\alpha_{k}))=\sigma(0)=0.$
>而 $\sigma(p(\alpha_{k}))=\sigma\left( \sum_{i=0}^{m}\beta_{i}\alpha_{k}^{i} \right)=\sum_{i=0}^{m}\sigma(\beta_{i}\alpha_{k}^{i})=\sum_{i=0}^{m}\beta_{i}\sigma(\alpha_{k}^{i}=\sum_{i=0}^{m}\beta_{i}\sigma(\alpha_{k})^{i}=p(\sigma(\alpha_{k})).$
>所以 $p(\sigma(\alpha_{k}))=0.$
>
>**也就是说， $\sigma$ 把 $p$ 的根映射到 $p$ 的根。**
>
>由于 $\sigma$ 是单射，它在有限根集 $\{ \alpha_{1},\cdots,\alpha_{n} \}$ 上给出的单射也是满射。
>$\sigma$ 是根集的置换。
>因此每个根 $\alpha_{k}$ 都在 $\sigma(\overline{F})$ 中。
>
>而 $\overline{F}$ 中的任意元素都是某个 $F[x]$ 多项式的根，所以每个元素都在 $\sigma(\overline{F})$ 中。
>于是 $\sigma(\overline{F})=\overline{F}.$ $\blacksquare.$

由证明过程，可以得到单代数扩张的嵌入由 $\alpha$ 的像决定：

>[!lemma]
>$F$-嵌入 $\sigma:F(\alpha)\to \overline{F}$ 必须把 $\sigma$ 送到某个 $p$ 的根。

反过来也成立，任意一个根都能给出一个单代数扩张的嵌入。

>[!lemma]
>设 $\beta \in \overline{F}$ 是 $p(x)$ 的一个根。$p(x)$ 是 $\alpha$ 的极小多项式。
>可以定义 $F$-嵌入 $\sigma:F(\alpha)\to \overline{F},\;\sigma(f(\alpha))=f(\beta).$ 

>[!proof]
>证明 $\sigma$ 是良定义的。
>若 $f(\alpha)=g(\alpha)$ ，则 $(f-g)(\alpha)=0.$
>因为 $p(x)$ 是 $\alpha$ 的极小多项式，所以 $p(x) \mid f(x)-g(x).$
>因此 $(f-g)(\beta)=0.$ 从而 $f(\beta)=g(\beta).$
>
>从而 $\sigma$  是一个 $F$-嵌入。$\blacksquare.$

由上可以直接出下面定理。

>[!theorem]
>设 $\tau:F\hookrightarrow\overline F$ ，$\alpha\in\overline F$，$p(x)$ 是 $\alpha$ 在 $F$ 上的极小多项式。则 $\tau$ 可以拓展为 $\sigma:F(\alpha)\to\overline F$ 的 $F$-嵌入，并且拓展的个数等于 $p(x)$ 的不同根个数。

实际上，$\tau$ 不仅可拓展成 $\sigma:F(\alpha)\to\overline F.$

>[!theorem]
>设 $F < E < \overline{F}$ 。若 $\tau: F \hookrightarrow \overline{F}$，那么 $\tau$ 可以拓展为 $\sigma:E \to \overline{F}.$ 
>
>并且如果给定某个 $\alpha \in E$ ，以及 $\alpha$ 的极小多项式 $p(x)$ 的某个根 $\beta$ ，那么可以选择一个 $\sigma$ 使得 $\sigma(\alpha)=\beta.$

>[!proof]
>由上，我们可以把 $\tau$ 拓展到 $F(\alpha) \to \overline{F}$ 并指定 $\alpha \mapsto \beta.$
>
>接着我们继续把这个嵌入拓展到整个 $E.$
>如果 $E=F(\alpha_{1},\cdots,\alpha_{n})$ 是有限代数扩张，则可以反复：
>$F \to F(\alpha_{1}) \to \cdots \to E.$
>如果 $E / F$ 是无限代数扩张，严格证明需要用到 Zorn 引理，这里不展开。$\blacksquare.$

基于上面的概念，我们给出正规扩张的概念。

>[!definition] 正规扩张
>设 $F< K<\overline F$。若满足以下等价条件之一，则称 $K/F$ 是正规扩张，记为 normal：
>1. 对任意 $\sigma:K\to\overline F$ 的 $F$-嵌入，有 $\sigma(K)\subset K$；
>2. 对任意 $p(x)\in F[x]$，若 $p(x)$ 在 $K$ 中有一个根，则 $p(x)$ 在 $K$ 上分裂；
>3. $K$ 是 $F$ 上某个非常数多项式集合的分裂域。

>[!comment]
>条件 3 的一个更具体的描述：正规扩张可以理解为“由一批多项式的全部根生成的扩张”。

>[!proof] 正规可扩张的主要证明思路
>$(1)\Rightarrow(2)$：设 $p(x)$ 有一个根 $\alpha\in K$。若 $\beta$ 是 $p(x)$ 的另一个根，则存在 $F$-嵌入 $\sigma:K\to\overline F$，使得 $\sigma(\alpha)=\beta$。由条件 1，$\sigma(K)\subset K$，因此 $\beta\in K$。
>
>$(2)\Rightarrow(3)$：取集合 $\mathcal P=\{\min(\alpha,F)\mid \alpha\in K\}$。由条件 2，这些极小多项式在 $K$ 中分裂，所以 $K$ 是这些多项式的分裂域。
>
>$(3)\Rightarrow(1)$：若 $K$ 是多项式集合的分裂域，则任意 $F$-嵌入 $\sigma:K\to\overline F$ 会把根送到同一个多项式的根，因此 $\sigma(K)\subset K$。$\blacksquare.$

最后我们给出自同构与 Galois 群的概念，为 Galois 理论做铺垫。

>[!definition] 自同构
>设 $F<E<\overline F$。若 $\sigma:E\to\overline F$ 是 $F$-嵌入且 $\sigma(E)\subset E$，则 $\sigma$ 可看作 $E$ 上的 $F$-自同构。

>[!comment]
>正规扩张的条件1可以用自同构的语言定义:
>所有 $F$-嵌入 $\sigma:K\to\overline F$ 都是 $K$ 的自同构。

>[!definition] Galois 群
>定义 $E / F$ 的 Galois 群如下。
>
>所有 $E \to E$ 的 $F$-自同构构成一个群，记作 $\operatorname{Aut}_F(E)$，也记作 $\operatorname{Gal}(E/F)$ 或 $G_F(E)$。

>[!definition] 共轭元
>若 $\alpha,\beta$ 有相同的极小多项式，则称 $\alpha,\beta$ 互为共轭。

>[!theorem]
>设 $E=F(\alpha)$ 且 $E/F$ 正规。若 $\alpha$ 的极小多项式 $p$ 无重根，则 $|G_F(E)|=\deg p=[E:F].$

证明的思路大致是：
- $E=F(\alpha) \implies \sigma$ 由 $\sigma(\alpha)$ 决定，$\forall \sigma \in G_{F}(E).$
- $E / F$ 正规 $\implies$ $p$ 所有根都在 $E$ 中。
- $p$ 无重根 $\implies$ $p$ 有 $\deg p$ 个不同的根。
