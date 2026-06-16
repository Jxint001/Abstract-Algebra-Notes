
> [!definition] 群的定义
> 一个非空集合 $G$ 连同一个二元运算 $\cdot: G\times G \to G$ 称为群，如果：
> 1. $\cdot$ 满足结合律：$\forall \alpha, \beta, \gamma \in G, (\alpha \cdot \beta) \cdot \gamma = \alpha \cdot (\beta \cdot \gamma)$
> 2. $G$ 含有幺元 $e$： $\exists e \in G, \forall \alpha \in G, \alpha \cdot e = e \cdot \alpha = \alpha$
> 3. 存在逆元：$\forall \alpha \in G, \exists \beta \in G, \alpha \cdot \beta = \beta \cdot \alpha = e$.
> 
> 称 $(G, \cdot)$ 是群。（$\cdot$ 可以记成任何样子，只要性质满足。有 $\cdot$ 也会省略不写。）

>[!comment] Comments
>1. 幺元 $e$ 是唯一的：
>   假设存在两个幺元 $e$, $e'$, 那么 $e = ee' = e'$.
>2. 逆元是唯一的：
>   如果 $\alpha$ 存在两个逆元 $\beta$, $\beta '$，那么 $\beta'=e \beta'=\beta \alpha \beta' = \beta$.
>   **记 $\alpha$ 的逆元为 $\alpha^{-1}$.**
>3. $(\alpha^{-1})^{-1} = \alpha$.
>4. $(\alpha \beta)^{-1} = \beta^{-1} \alpha^{-1}$.
>5. 如果 $(G, \cdot)$ 满足群的定义并且满足交换律：
>   $\forall \alpha, \beta \in G, \alpha \cdot \beta = \beta \cdot \alpha$，
>   那么称 $(G, \cdot)$ 为交换群（abel 群）。
>6. 如果 $|G| = \infty$, 称之为无限群。反之称为有限群，且 $o(G) =  |G|$ 称为 $G$ 的阶（order）。

这里给出两个群的例子。

>[!example] 模 $n$ 剩余类中的加法群
> $G = \mathbb{Z}_n$，定义二元运算 $+$ ：$\forall \overline{a}, \overline{b}\in \mathbb{Z}_n, \overline{a}+\overline{b} \triangleq \overline{a+b}$.
> 
> 显然 $\overline{a+b}\in G$，$+$ 在 $G$ 上封闭。
> 
>作出这个定义后，需要保证它是良定义（well-defined)，即
>$a$ $\sim$ $a'$, $b$ $\sim$ $b'$, 我们希望有 $\overline{a'} + \overline{b'} = \overline{a+b}$.
>这容易验证：$n \mid a+b-a'-b'$ $\Rightarrow$ $\overline{a+b} = \overline{a'+b'}$.
>因此 $+$ 是良定义的。
>
>接下来用定义验证 $(G, +)$ 是个群。
>1. $\forall \overline{a}, \overline{b}, \overline{c}\in \mathbb{Z}_n$, $\overline{a+b}+\overline{c} = \overline{(a+b)+c} = \overline{a+(b+c)} = \overline{a} + \overline{b+c}$.
>   注意从 $(a+b)+c$ 到 $a+(b+c)$ 是利用了整数加法的结合律，而不是我们定义的 $+$ 的结合律。
>2. 幺元：$\overline{0}$.
>3. $\overline{a}$ 的逆元：$\overline{n-a}$.

>[!example] 模 $n$ 的可逆剩余类群
>$G = \mathbb{Z}_n^* = \{\overline{\alpha} \in \mathbb{Z}_n \mid (\alpha, n) = 1\}$. 定义二元运算 $\cdot$ ：$\forall \overline{a}, \overline{b} \in \mathbb{Z}_n^*, \overline{a} + \overline{b} \triangleq \overline{a \cdot b}$.
>
>如果 $\overline{a}, \overline{b} \in G$, 那么 $\overline{a \cdot b} \in G$，因为 $a \cdot b$ 与 $n$ 仍然互质。因此 $\cdot$ 在 $G$ 上封闭。
>接着用类似上一个例子的方法，不难得出 $\cdot$ 是良定义的。
>
>接下来用定义验证 $(G, \cdot)$ 是个群。
>1. 用类似上一个例子的方法可以得出 $\cdot$ 具有结合律。
>2. 幺元：$\overline{1}$.
>3. $\overline{\alpha}$ 的逆元：可以由裴蜀定理保证存在性。

*（为了方便，在后续的讨论中我们会省略部分关于良定义的说明，但是这件事是很重要的。）*

实际上，要证明 $(G, \cdot)$ 是群，除了用证明运算的封闭性和满足定义之外，还可以用如下**等价**的方法：

>[!theorem] 对于 $(G, \cdot)$，如果 $\forall\alpha, \beta\in G$，且$\cdot$ 满足结合律，$\alpha\beta^{-1}\in G$，那么 $(G, \cdot)$ 是群。

简述其证明：
1. 由条件，结合律满足；
2. 由条件，逆元存在；
3. $\alpha \cdot \alpha^{-1} = e$，幺元存在；
4. 由于逆元存在且 $\alpha \beta^{-1}\in G$，运算封闭。
