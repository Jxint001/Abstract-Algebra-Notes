
[[整环的因式分解语言]] 提供了在整环中讨论因式分解性质的语言，现在我们可以正式探究整环的因式分解性质。

这部分主要分析三种整环：唯一分解整环（UFD），主理想整环（PID），欧几里得整环（ED）。三者有着从弱到强的因式分解性质。需要注意的是，有很多整环不属于这三者中任何一个。

>[!definition] 唯一分解整环（UFD）
>$R$ 是整环，若 $\forall \alpha \in R,\alpha \neq 0,\alpha \not\in u(R)$ 都能写成不可约元的乘积 $\alpha=c_{1}c_{2}\cdots c_{n}$ ，并且如果还有另一个不可约分解 $\alpha=d_{1}d_{2}\cdots d_{m}$ 那么 $n=m$ 且存在一个置换 $\sigma: [n]\to[m]$ 使得 $c_{i}\sim d_{\sigma(i)}$ 则称 $R$ 是唯一分解整环，即 UFD.
>
>这里的唯一性是指唯一到顺序和相伴为止，即允许调换因子顺序，也允许因子乘单位。

在 [[整环的因式分解语言]] 中已经知道：在整环中，素元 $\Rightarrow$ 不可约元。
而在 UFD 中，反过来也成立。

>[!lemma]
>$R$ 是 UFD，则 $\alpha \in R$ 是素元 $\iff$ $\alpha$ 是不可约元。

>[!proof]
>仅需证明在 UFD 中，$\alpha$ 是不可约元 $\Rightarrow$ $\alpha$ 是素元。
>已知 $\alpha=\beta\gamma \implies\beta \in u(R) \text{ or } \gamma \in u(R).$
>设 $\alpha \mid \beta\gamma.$
>由于 $\beta \in u(R) \implies\alpha \mid \gamma$ 和 $\gamma \in u(R) \implies \alpha \mid \beta$ ，因此 $\beta,\gamma \in u(R)$ 时结论显然成立。
>假设 $\beta,\gamma \not\in u(R).$
>因为 $R$ 是 UFD，所以可以分解 $\beta,\gamma$
>- $\beta=p_{1}p_{2}\cdots p_{r}.$
>- $\gamma=q_{1}q_{2}\cdots q_{s}.$
>
>于是 $\beta\gamma=p_{1}\cdots p_{r}q_{1}\cdots q_{s}.$
>$\alpha \mid \beta\gamma \implies \exists \delta \in R \;s.t.\;\beta\gamma=\alpha\delta.$
>
>如果 $\delta \in u(R)$ ，则 $\alpha\delta$ 本身就是不可约分解 ，于是 $p_{1}\cdots p_{r}q_{1}\cdots q_{s}=\alpha\delta$ 。
>因此 $\exists p_{i} \;s.t.\; p_{i} \sim \alpha$ 或者 $\exists q_{j}\;s.t.\; q_{j} \sim\alpha.$
>$p_{i}\sim\alpha,p_{i}\mid\beta \implies \alpha \mid\beta$ ， $q_{j} \sim\alpha,q_{j}\mid\gamma \implies\alpha \mid\gamma.$
>因此 $\alpha$ 是素元。
>
>如果 $\delta \not\in u(R)$ ，则 $\delta$ 可以被分解为 $d_{1}d_{2}\cdots d_{l}.$
>于是 $p_{1}\cdots p_{r}q_{1}\cdots q_{s}=\alpha d_{1}d_{2}\cdots d_{l}.$
>类似上面，我们可以得到 $\alpha=p_{i} \text{ or } q_j$.
>用类似的方法可以得出 $\alpha$ 是素元。 $\blacksquare.$

>[!example]
>$\mathbb{Z}[\sqrt{ -5 }]$ 是整环，不是 UFD.
>$6=2\cdot 3=(1+\sqrt{ -5 })(1-\sqrt{ -5 }).$
>这些因子在 $\mathbb{Z}[\sqrt{ -5 }]$ 中都可以证明是不可约元，所以元素分解不唯一。

>[!definition] 主理想整环（PID）
>$R$ 是整环，称 $R$ 是主理想整环（PID），如果 $R$ 中每个理想都是主理想：$\forall I < R$ （$I$ 是理想），$\exists \alpha \in R,I=\langle \alpha \rangle.$

>[!lemma]
>$R$ 是 PID，$\gcd(a,b)\sim 1 \iff \langle a,b \rangle=R \iff \exists u,v \in R\;s.t.\;au+bv=1.$

这是因为 $\langle a,b \rangle=\langle d \rangle \iff d \mid a, d \mid b, d=as+bt \iff d=\gcd(a,b).$ 而 $\langle d \rangle=R \iff d \sim 1.$

>[!example]
>$\mathbb{Z}$ 是 PID.
>
>主理想 $\langle m \rangle=m\mathbb{Z},m\geq 0.$
>只需要证明 $\forall m,n\geq 0,\;\exists d \in \mathbb{Z}\;s.t.\;\langle m,n \rangle=\langle d \rangle.$
>$m \in \langle d \rangle \implies d \mid m$，同理 $d \mid n.$
>因此 $d$ 是 $m,n$ 公因数。
>假设 $d' \mid m,\;d' \mid n.$
>$d \in \langle m,n \rangle \implies \exists s,t \in \mathbb{Z}\;s.t.\; d=ms+nt \implies d' \mid d.$
>因此 $d=gcd(m,n).$
>
>特别地，如果 $gcd(m,n)=1$ ，那么 $\exists s,t \in \mathbb{Z} \;s.t.\; ms+nt=1.$

>[!theorem]
>在整环中，PID $\implies$ UFD.
>
>在代数整数环中，PID $\iff$ UFD.（仅作补充，不证明）

>[!proof]
>整个证明的思路是：首先证明 PID $\implies$ 存在不可约分解，然后证明 PID $\implies$ 不可约元都是素元，最后用这两个结论推出分解的唯一性。
>
>设 $R$ 是 PID.
>
>首先证明 $\forall \alpha \in R,\;\alpha \not\in u(R),\alpha \neq 0$ ，$\alpha$ 都可以分解成不可约元乘积。
>反证法，假设 $\exists \alpha \in R,\;\alpha \not\in u(R),\alpha \neq 0$，$\alpha$ 不能分解成不可约元乘积。
>$\alpha$ 本身不是不可约元，所以存在非平凡分解 $\alpha=\beta\gamma,\;\beta,\gamma \not\in u(R).$
>$\beta,\gamma$ 中至少有一个不能被分解成不可约元乘积，不妨设是 $\beta.$
>于是 $\langle \alpha \rangle \subsetneq \langle \beta \rangle.$
>对 $\beta$ 继续分解，$\beta=\beta_{1}\gamma_{1},\;\gamma_{1}\not\in u(R),\beta_{1}$ 不能被分解成不可约元乘积。
>依此类推，可以得到无限的严格的上升链：$\langle \alpha \rangle \subsetneq \langle \beta \rangle \subsetneq \langle \beta_{1} \rangle\subsetneq \cdots$
>若 $I_{1} \subset I_{2} \subset \cdots$ ，令 $I=\bigcup_{n\geq_{1}}I_{n}$ ，容易验证 $I$ 是理想。
>因为 $R$ 是 PID ，所以 $I=\langle d \rangle.$
>$d \in I \implies d \in I_{N} \implies I=\langle d \rangle \subset I_{N}\subset I.$
>因此 $I_{N}=I.$
>也就是说从某个 $N$ 开始，上升链就不是严格上升了。
>这和前面推出的无限的严格的上升链矛盾，因此不存在这样的 $\alpha.$
>
>然后证明 $p$ 是 $R$ 中不可约元则 $p$ 是素元。
>只需要证明 $p \mid ab,\;p \nmid a \implies p \mid b.$
>$\langle p,a \rangle=pR+aR=\langle d \rangle.$
>$p \in \langle d \rangle \implies d \mid p.$
>由于 $p$ 不可约，所以 $d \sim p$ 或 $d \in u(R).$
>$d \sim p \implies \langle p,a \rangle=\langle p \rangle \implies a \in \langle p \rangle \implies p \mid a$ 与假设矛盾。
>因此 $d \in u(R).$
>所以 $\langle p,a \rangle=R.$
>于是 $\exists x,y \in R\; s.t.\;xp+ya=1 \implies xpb+yab=b.$
>$p \mid xpb$ 且 $p \mid ab \implies p \mid yab.$
>因此 $p \mid b$ ，$p$ 是素元。
>
>最后证明分解的唯一性。
>设 $\alpha \in R,\;\alpha \not\in u(R),\alpha \neq 0$ 有两个不可约分解，$\alpha=p_{1}p_{2}\cdots p_{n}=q_{1}q_{2}\cdots q_{m}.$
>$p_{i},q_{j}$ 都是不可约元，因此都是素元。
>$p_{1} \mid q_{1}\cdots q_{m} \implies p_{1}\mid q_{j} \implies p_{1} \sim q_{j}.$
>可以调换 $q_{j}$ 和 $q_{1}$ ，得到 $q_{1}=up_{1},u \in u(R).$
>于是 $p_{1}p_{2}\cdots p_{n}=uq_{1}q_{2}\cdots q_{m}.$
>消去 $p_{1}$ 得到 $p_{2}\cdots p_{n}=uq_{2}\cdots q_{m}.$
>继续对剩下的因子重复这个过程。
>最后会得到 $m=n$ （否则就有 $1 \sim q_{j}$ 或者 $1 \sim p_{i}$，这是不可能的。）
>并且在过程中就会得到置换 $\sigma \;s.t.\; p_{i}\sim q_{\sigma(i)}.$
>因此 $R$ 是 UFD ，即 PID $\implies$ UFD. $\blacksquare.$

>[!example]
>$\mathbb{Z}[\sqrt{ 10 }]=\{ a+b\sqrt{ 10 }\mid a,b \in \mathbb{Z} \}.$ 证明其中 $\langle 2,4+\sqrt{ 10 } \rangle$ 不是主理想。
>
>反证法，假设 $\langle 2,4+\sqrt{ 10 } \rangle=\langle \alpha \rangle.$
>$2 \in \langle \alpha \rangle \implies \alpha \mid 2,\;N(\alpha)\mid 4.$
>$4+\sqrt{ 10 } \in \langle \alpha \rangle \implies \alpha \mid 4+\sqrt{ 10 },\;N(\alpha)\mid 6.$
>因此 $N(\alpha)=\pm 1,\pm 2.$
>
>- $N(\alpha)=\pm 1 \implies\alpha \in u(\mathbb{Z}[\sqrt{ 10 }]) \implies \langle \alpha \rangle=\mathbb{Z}\sqrt{ 10 }.$
>  这是不可能的。
>- $N(\alpha)=\pm 2 \implies \exists a,b \in \mathbb{Z} \;s.t.\;a^{2}-10b^{2}=\pm 2 \implies a^{2}\equiv 2 \pmod{5} \text{ or }a \equiv 3 \pmod{5}.$
>  但是模 $5$ 的平方只能是 $0,1,4.$
>
>因此不存在这样的 $a.$
>所以 $\langle 2,4+\sqrt{ 10 } \rangle$ 不是主理想。

>[!definition] 欧几里得整环（ED）
>$R$ 是整环，如果存在函数 $\varphi:R \to \mathbb{N}$ 满足：
>1. $\varphi(r)=0 \iff r=0_{R}$
>2. $\forall \alpha,\beta \in R,\beta \neq 0, \exists q,r \in R\; s.t.\;\alpha=\beta q+r$ 且 $r=0_{R} \text{ or } \varphi(r) < \varphi(\beta)$.
>
>则称 $R$ 为 ED.
>$\varphi$ 称为欧式函数。

>[!comment]
>ED 就是整环版本的带余除法。

>[!example]
>$\mathbb{Z}$ 是 ED.
>取 $\varphi(r)=|r|$ 即可：$a=bq+r,|r|<|b|.$

>[!theorem]
>ED $\implies$ $PID$.

>[!proof]
>设 $I <R$ 是一个非零理想。在 $I - \{ 0 \}$ 中选择一个 $\varphi$ 值最小的元素 $\alpha \in I.$
>验证 $I=\langle \alpha \rangle.$
>显然 $\langle \alpha \rangle \subset I.$
>$\forall x \in I,\exists q,r \in R,\;s.t.\; x=q\alpha+r,\;r=0_{R} \text{ or } \varphi(r) < \varphi(\alpha).$
>由于 $x \in I,q\alpha \in I$ 因此 $r=x-q\alpha \in I.$
>因此 $\varphi(r) < \varphi(\alpha)$ 与 $\alpha$ 的最小性矛盾。
>所以 $r=0_{R}.$
>于是 $x=q\alpha \in \langle \alpha \rangle.$
>因此 $I \subset \langle \alpha \rangle.$
>$I=\langle \alpha \rangle.$ $\blacksquare.$

>[!comment] PID $\nRightarrow$ ED.
>$\mathbb{Z}[\frac{1+\sqrt{ -19 }}{2}]=\{ a+b\frac{1+\sqrt{ -19 }}{2} \mid a,b \in \mathbb{Z} \}$ 是 PID 而不是 ED.
>
>证明较为复杂，这里不展开。

结合前两个定理，可以直接得出：

>[!theorem]
>ED $\implies$ PID $\implies$ UFD.

所以说 $\mathbb{Z}$ 的性质很好（因为是 ED 所以也是 PID 和 UFD）。

