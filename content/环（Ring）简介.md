
群是一个集合连同一个二元运算，环则拓展了这一概念，是一个集合连同两个二元运算。

>[!definition] 环（Ring）
>一个非空集合 $R$ 连同两个二元运算符：$+,\cdot：R \times R \to R$ ，称为环，如果
>1. $(R,+)$ 是 abel 群
>2. 乘法结合律：$\forall\alpha,\beta,\gamma \in R,\alpha\beta\gamma=\alpha(\beta\gamma).$
>3. 分配律：$\forall\alpha,\beta,\gamma \in R,\alpha(\beta+\gamma)=\alpha\beta+\alpha\gamma$，$(\beta+\gamma)\alpha=\beta\alpha+\gamma\alpha$.

>[!comment]
>1. 记 $(R,+)$ 的幺元 $e$ 为 $0$.
>2. 记 $\alpha$ 关于 $+$ 的逆元为 $-\alpha$，关于 $\cdot$ 的逆元为 $\alpha^{-1}.$
>3. 一般默认 $\cdot$ 优先级高于 $+$.
>4. $R=\{ 0 \}$ 称为零环，由于过于平凡，一般不讨论它。
>5. 如果 $\cdot$ 有交换律，$(R,+,\cdot)$ 称为交换环。
>6. 如果 $\exists e \in R$ $s.t.$ $\forall \alpha \in R,e\alpha=\alpha e=\alpha$，则称 $e$ 为乘法幺元，记为 $1$ 。此时 $R$ 称为含幺环或者含 $1$ 环。

>[!comment]
>7. $0\alpha=\alpha 0=0$.
>   $(0+0)\alpha=0\alpha+0\alpha=0\alpha$ ，两边减去 $0\alpha$ 可得 $0\alpha=0$.
>   类似可得 $\alpha 0=0.$
>8. $\forall\alpha,\beta \in R$ ，$(-\alpha)\beta=\alpha(-\beta)=-\alpha\beta$.
>   $\alpha\beta+(-\alpha)\beta = (\alpha+(-\alpha))\beta=0\beta=0.$
>   $\alpha\beta+\alpha(-\beta)=\alpha(\beta+(-\beta))=\alpha 0=0.$
>9. $\sum_{i=1}^{m}\alpha_{i}\sum_{j=1}^{n}\beta_{j}=\sum_{i=1}^{m}\sum_{j=1}^{n}\alpha_{i}\beta_j$
>   不断使用分配律即可。
>10. $n\alpha\beta=\alpha(n\beta)=n(\alpha\beta),n \in \mathbb{Z}$.
>    这里的 $n\alpha$ 指的是 $n$ 个 $\alpha$ 被 $+$ 在一起。
>    $n>0$：$(\alpha+\cdots+\alpha)\beta=(\alpha\beta+ \cdots+ \alpha\beta)=n\alpha\beta$.
>    其他情况类似可得。

在群中，2 个不同的元素相加可能等于 $0$ ；而在一般的环中，不仅如此，2 个不同的元素相乘也可能等于 $0$ 。
比如在环 $\mathbb{Z}_{6}$ 中，$\overline{2}\cdot \overline{3}=\overline{6}=\overline{0}$ 。（$+,\cdot$ 是自然数上的加法，乘法。）

>[!definition] 零因子
>$R$ 是环，$\alpha \neq 0 \in R$，$\exists\beta \neq 0$ $s.t.$ $\alpha\beta=0$ ($\beta\alpha=0$)，则称 $\alpha$ 为左（右）零因子。
>
>若 $\alpha$ 既是左零因子，又是右零因子，则称之为零因子。

>[!comment]
>若 $R$ 是交换环，则 $\alpha\beta=\beta\alpha$ ，$\alpha$ 是左（右）零因子则代表 $\alpha$ 是零因子。
>
>**零因子关注环的乘法结构，尤其是乘法结构中 $0$ 是否可达。**

 >[!example]
 >$(\mathbb{Z}_{4},+,\cdot)$ 中， $2$ 是零因子。
 
 有零因子会让环变得更加复杂，尤其是和整数上的规律就不同了（$\mathbb{Z}$ 上不会有 $mn=0$ 且 $m \neq 0,n \neq 0$ ）。
因此没有零因子往往会让环变得性质好一些，为此引入整环的定义。

>[!definition] 整环（Domain）
>$R$ 是含幺交换环，且无零因子，则称为整环，也叫 Domain。
>在讨论整环相关问题时，默认 $1 \neq 0.$

我们再介绍一个环中的基本概念。

>[!definition] 可逆和单位（unit）
>$R$ 是含幺环。若 $\exists u \in R$ ，$v \in R$ $s.t.$ $uv=1$ ($vu=1$) 则称 $u$ 是右（左）可逆。$u$ 为 $v$ 的左逆，$v$ 为 $u$ 的右逆。
>
>如果 $u$ 既左可逆，又右可逆，则称 $u$ 为单位，也叫 $unit$ 。$u$ 的逆记为 $u^{-1}$.

容易验证 $u(R)\triangleq \{ R\text{ 中所有 }unit \}$ 关于 $\cdot$ 是群。

>[!comment]
>1. 如果 $u$ 同时有左逆和右逆，那么 $u$ 的左逆和右逆相同。
>   $vu=1,uv'=1 \implies v=v 1=vuv'=v'.$
>2. 如果 $R$ 是含幺交换环，则左逆=右逆=逆。
>3. 如果 $u$ **不**同时有左逆和右逆，那么在一般的含幺环 $R$ 中，可以
>   $\exists vu=1,v'u=1,v \neq v'.$
>4. 如果 $R$ 中 $1\neq 0$ ，那么 $0$ 一定不可逆，因为 $\forall v \in R,0v=v 0=0 \neq 1$.
>
>**可逆元关注环的乘法结构，尤其是乘法逆元的存在性。**

（如不特殊说明，$+,\cdot$ 都是对应环上平常使用的运算。）

>[!example]
>$\mathbb{Z}$ 是整环。$u(\mathbb{Z})=\{ 1,-1 \}$.

>[!example]
>$\mathbb{Z}[i]\triangleq\{ \alpha+\beta i \mid\alpha,\beta \in \mathbb{Z} \}(i=\sqrt{ i })$ 是含幺交换环。
>$u(\mathbb{Z}[i])=\{ \pm 1, \pm i\}$.

最后给出域的概念。

>[!definition] 域（Field）
>$(R,+,\cdot)$ 是环，$R^{*}=R-\{ 0 \}$ 。如果 $(R^{*},\cdot)$ 为 abel 群，则 $R$ 为域，记为 $F$ (Field). 
>
>等价地，域也可以定义成满足下面三个条件：
>1. $(F,+)$ 是 abel 群
>2. $(F^{*},\cdot)$ 是 abel 群
>3. $\cdot$ 在 $F$ 上有分配律。
>
>不严谨地说，域中任何元素都可以做加减乘法（减法定义成加法的逆），任何非零元素都可以做除法（除法定义成乘法的逆）。

这里默认了 $R$ 中 $1 \neq 0$ 。$(R^{*},\cdot)$ 中去掉 $0$ 是因为这时 $0$ 不是单位，不可逆，因此 $(R,\cdot)$ 不可能是群。

>[!example]
>$u(\mathbb{Z}_{n})=\mathbb{Z}_{n}^{*}$.
>$p$ 是素数，$u(\mathbb{Z}_{p})=\{ 1,2,\cdots,p-1 \}$. $(\mathbb{Z}_{p},+,\cdot)$ 是域。
>
>$(\mathbb{Q},+,\cdot)$ 是域。
>
>$Q[i]\triangleq\{ \alpha+\beta i \mid \alpha,\beta \in \mathbb{Q} \}$.
>$(\mathbb{Q}[i],+,\cdot)$ 是域。

>[!lemma] 
>域是整环.

>[!proof]
> 显然 $F$ 是含幺交换环。只需要证明 $F$ 没有零因子。
> $\forall\alpha \in F^{*}$，如果 $\exists\beta \in F^*,\alpha\beta=0$，那么 $\alpha^{-1}\alpha\beta=\alpha^{-1}0=0,\alpha^{-1}\alpha\beta=1\beta=\beta$.
> 所以 $\beta=0$ ，这与 $\beta \in F^{*}$ 矛盾。
> 因此 $F$ 没有零因子。$\blacksquare.$

