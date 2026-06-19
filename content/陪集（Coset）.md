---

---

为了说明什么是陪集，我们先引入如下等价关系：

>[!definition] 左陪集的对应等价关系$\sim$
>$(G, \cdot)$ 是群，$H<G$ 是 $G$ 的[[子群（Subgroup）]]，$\forall \alpha, \beta \in G$，称 $\alpha$ $\sim$ $\beta$，如果 $\alpha^{-1}\beta \in H$.

>[!proof] 证明 $\sim$ 是 $(G, \cdot)$ 上的等价关系
>1. 自反性：$\alpha^{-1} \cdot \alpha = e \in H$ $\Rightarrow$ $\alpha$ $\sim$ $\alpha$.
>2. 对称性：$\alpha$ $\sim$ $\beta$ $\Leftrightarrow$ $\alpha^{-1}\beta\in H$ $\Rightarrow$ $(\alpha^{-1}\beta)^{-1} = \beta^{-1} \alpha \in H$ $\Rightarrow$ $\beta$ $\sim$ $\alpha$.
>3. 传递性：$\alpha$ $\sim$ $\beta$, $\beta$ $\sim$ $\gamma$ $\Leftrightarrow$ $\alpha^{-1}\beta \in H$ $\beta^{-1} \gamma \in H$ $\Rightarrow$ $\alpha^{-1}\gamma = (\alpha^{-1} \beta) (\beta^{-1}\gamma)\in H$ $\Leftrightarrow$ $\alpha$ $\sim$ $\gamma$. $\blacksquare$.

自然地，$\alpha$ 所在的等价类 $[\alpha] = \{\beta\in G \mid \alpha^{-1}\beta \in H\}$.

$[\alpha]$ 也可以被表示为 $\{\alpha h \mid h \in H\}$，因为 $\forall h \in H$，都有 $\alpha^{-1}(\alpha h) = h$.

>[!definition] 陪集
我们记 $\alpha H = \{\alpha h \mid h \in H\}$，称之为 $H$ 的左陪集。
类似地，如果我们对称地定义 $\alpha$ $\sim$ $\beta$ $\iff$ $\alpha \beta^{-1} \in H$，就可以得到 $\alpha$ 所在的等价类是 $H \alpha$，即 $H$ 的右陪集。

> 为什么要引入这么一个奇怪的等价关系和陪集定义呢？从下面这个性质中你可以感受到一丝它的强大之处。

>[!theorem] $|\alpha H| = |H|$

>[!proof] 证明 $|\alpha H| = |H|$
>定义映射 $f: H \to \alpha H,\; h \mapsto \alpha h$.
>- $f$ 是单射，因为 $\alpha h_1 = \alpha h_2$ $\Rightarrow$ $h_1 = h_2$ （左乘 $\alpha^{-1}$）.
>- $f$ 是满射，因为 $\forall x \in \alpha H$, $\exists h$ $s.t.$ $x = \alpha h$. $\blacksquare$.

也就是说，所有 $H$ 的左陪集的大小相等且都等于 $|H|$ ！类似地，可以证明所有 $H$ 的右陪集的大小相等且都等于 $|H|$ ！因此，所有 $H$ 的陪集的大小相等且都等于 $|H|$ 。