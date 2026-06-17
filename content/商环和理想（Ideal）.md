
商环和理想之间的关系与 [[商群和正规子群]] 类似。整体的思路也类似。
我们考虑如何从商集得到商环。商集的定义在 [[商群和正规子群]] 中已经给出。

给定环 $(R,+,\cdot)$ 和 $S<R$ ，我们想要定义出 $(R / S,\oplus,\bullet)$ 是环。注意这里 $R / S$ 是关于 $+$ 的商集，即 $\{ \alpha_{1}+S,\cdots,\alpha_{n}+S,\cdots\}$. 

记 $\alpha + S=\overline{\alpha}$ 。

类似 [[商群和正规子群]] ，自然地定义 $\oplus$ 和 $\bullet$ 如下：

$$
\overline{\alpha}\oplus\overline{\beta}=\overline{\alpha+\beta},\overline{\alpha}\bullet\overline{\beta}=\overline{\alpha\beta}.
$$
但是这样的定义不一定总是良定义的。对于何时良定义，我们有下面结论。

>[!lemma]
>给定环 $(R,+,\cdot)$ 和 $S<R$ ，
>如上定义的 $(R / S,\oplus,\bullet)$ 是环 $\iff$ $S$ 满足 $r\alpha,\alpha r \in S$ ， $\forall \alpha \in S,r \in R$.

>[!proof]
>$\Rightarrow$：
>$r\alpha \in S \iff \overline{r\alpha}=S=\overline{0} \in R / S.$
>$\overline{r\alpha}=\overline{r}\bullet\overline{\alpha}$.
>由 $\alpha \in S$ ，$\overline{\alpha}=\overline{0}$.
>因此 $\overline{r}\bullet\overline{\alpha}=\overline{r}\bullet\overline{0}=\overline{r 0}=\overline{0}.$
>从而 $r\alpha \in S.$
>类似可得 $\alpha r \in S.$
>
>$\Leftarrow$：
>首先我们需要证明满足右侧条件的前提下，$\oplus,\bullet$ 是良定义的。
>由于 $(R,+)$ 是 abel 群，且 $S<R$ ，因此 $S \trianglelefteq (R,+)$.
>由 [[商群和正规子群]] 中的讨论，$\oplus$ 是良定义的。
>
>我们还需要证明 $\bullet$ 是良定义的。
>即证 $\overline{\alpha'\beta'}=\overline{\alpha\beta},\forall\alpha \sim\alpha',\beta \sim\beta'$ （等价关系是左陪集等价。）
>这等价于证明 $\alpha'\beta'-\alpha\beta \in S.$
>$\alpha'\beta'-\alpha'\beta+\alpha'\beta-\alpha\beta=\alpha'(\beta'-\beta)+(\alpha'-\alpha)\beta.$
>由于 $\alpha' \in R,(\beta'-\beta)\in S,\beta \in R,(\alpha'-\alpha)\in S$ ，
>根据右侧条件，$\alpha'(\beta'-\beta)+(\alpha'-\alpha)\beta \in S \implies \alpha'\beta'-\alpha\beta \in S.$
>
>证明完良定义之后，我们还需要证明 $(R / S,\oplus)$ 是 abel 群，$\bullet$ 具有结合律，以及 $\oplus,\bullet$ 具有分配律。
>第一条容易由 $(R,+)$ 是 abel 群验证。
>第二条容易由 $\cdot$ 具有结合律验证。
>第三条证明如下。
>
>$\overline{\alpha}\bullet(\overline{\beta}\oplus\overline{\gamma})=\overline{\alpha}\bullet(\overline{\beta+\gamma})=\overline{\alpha(\beta+\gamma)}=\overline{\alpha\beta+\alpha\gamma}=\overline{\alpha\beta}\oplus \overline{\alpha\gamma}=\overline{\alpha}\bullet\overline{\beta}\oplus \overline{\alpha}\bullet\overline{\gamma}.$
>类似可得 $(\overline{\beta}\oplus \overline{\gamma})\bullet\overline{\alpha}=\overline{\beta}\bullet\alpha \oplus\gamma \bullet\alpha.$ $\blacksquare.$

我们给满足右侧条件的 $S$ 一个名字：理想。

>[!definition] 理想（Ideal）
>$R$ 是环，$I<R$，如果 $\forall\alpha \in I,r \in R$ 都有 $r\alpha,\alpha r \in I$ 则称 $I$ 是理想。

>[!comment]
>根据前面的证明，可以把 $I<R$ 的条件弱化称 $(I,+)<(R,+)$.
>因此方便理解来说，理想就是一个具有乘法吸收性质的加法子群。
>
>如果 $I$ 是理想，则 $(R / I,\oplus,\bullet)$ 是环，称为**商环**。 

>[!example]
>$(\mathbb{Z},+,\cdot)$ 是环，根据 [[循环群]] ，$(\mathbb{Z},+)$ 的所有子群是 $(m\mathbb{Z},+),m\geq 0$.
>$(m\mathbb{Z},+,\cdot)$ 是子环且 $\forall mz \in m\mathbb{Z},\forall n \in \mathbb{Z}: n\cdot mz,mz \cdot n \in m\mathbb{Z}.$
>因此 $(m\mathbb{Z},+,\cdot)$ 是理想。

