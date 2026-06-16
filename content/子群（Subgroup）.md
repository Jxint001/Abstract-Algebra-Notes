
>[!definition] 子群
>给定一个群 $(G, \cdot)$，如果有集合 $H \subset G$ 且 $(H, \cdot)$ 也是群，则称 $H$ 为 $G$ 的子群，记 $H < G$ 。
>
>$H$ 可以就是 $G$ 。

>[!comment] Comments
>1. $H$ 中的幺元就是 $G$ 中的幺元 $e$.
>   如果 $H$ 中存在另一个幺元 $e'$，那么 $\forall \alpha \in H$，$\alpha \cdot e = \alpha = \alpha \cdot e'$. 左乘 $\alpha^{-1}$ 得到 $e = e'$.

类似 [[群（Group）简介]] 末尾介绍的验证是群的方法，验证 $H < G$ 除了利用定义外（运算的结合律已经自然满足了）也可以直接去验证 $\forall \alpha, \beta \in H$，$\alpha \beta^{-1}\in H$。