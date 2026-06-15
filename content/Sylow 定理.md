
这是关于群论讲解的最后一个部分，主要是通过 [[群在集合上的作用]] ，以及 [[轨道-稳定子定理]] 来证明 Sylow 定理。Sylow 定理有三个版本，我们将一一证明之。

>[!definition] Sylow-$p$ 子群
>设 $G$ 是有限群，$p$ 是素数，并且 $|G|=mp^{n},p \nmid m$ 。如果 $P<G$ 且 $|P|=p^{n}$ ，那么称 $P$ 是 $G$ 的一个 Sylow-$p$ 子群。
>
>Sylow-$p$ 子群就是 $G$ 中阶等于 $|G|$ 的最高 $p$-幂因子的子群。

>[!theorem] Sylow 第一定理
>$G$ 是有限群，$p$ 是素数，若 $|G|=mp^{n},p \nmid m$ ，则 $G$ 中存在 Sylow-$p$ 子群。
>

要找一个子群，借鉴 [[轨道-稳定子定理]] 这一节的内容，我们可以采取构造一个群作用然后把某个稳定子拿出来的思路（因为稳定子是子群）。（虽然我感觉这个证明还是很奇妙。）

>[!proof]
>令 $\Omega=\{X\subseteq G\mid |X|=p^n\}.$ $|\Omega|=\binom{mp^n}{p^n}.$
>
>下面说明 $p\nmid |\Omega|.$  $|\Omega|=m\prod_{i=1}^{p^{n}-1} \frac{mp^{n}-i}{p^{n}-i}$.
>考察每一项 $\frac{mp^{n}-i}{p^{n}-i}$ ：
>- 如果 $p \nmid i$ ，那么 $p$ 不会出现在分子分母中；
>- 如果 $i=sp^{t},p \nmid s$ ，那么 $\frac{mp^{n}-sp^{t}}{p^{n}-sp^{t}}=\frac{mp^{n-t}-s}{p^{n-t}-s}$ 变为上面的情况。
>
>因此每一项都不含 $p$ ，从而 $p\nmid |\Omega|.$
>
>令 $G$ 作用在 $\Omega$ 上：$g \cdot X=gX=\{ gx \mid x \in X \}$. 
>因为 $p \nmid |\Omega|$ ，所以在 $\Omega$ 的轨道分解里，至少存在一个轨道 $C$ ，使得 $p \nmid |C|$.
>取 $X \in C$，令 $H=Stab(X)=\{ g \in G \mid gX=X \}$.
>由轨道-稳定子定理，$|C|=[G:H]=|G| / |H|$.
>因为 $|G|=mp^{n}$ ，且 $p \nmid |C|$ ，所以 $H$ 中必然含有 $p^{n}$ 因子，即 $p^{n}\mid|H|$.
>
>取任意 $x \in X$ ，因为 $H=Stab(X)$，所以 $hx \in X,\forall h \in H$.
>映射 $H \to X, h \mapsto hx$ 是单射，因为 $h_{1}x=h_{2}x \iff h_{1}=h_{2}.$
>因此 $|H| \leq |X|=p^{n}$.
>结合 $p^{n}\mid|H|$ ，可得 $|H|=p^{n}$，$H$ 是 Sylow-$p$ 子群。$\blacksquare.$

>[!theorem] Sylow 第二定理
>$G$ 是有限群，$p$ 是素数，若 $|G|=mp^{n},p \nmid m$ ，则 $G$ 中所有 Sylow-$p$ 子群都共轭。

>[!proof]
>即证明若 $H,H'$ 都是 Sylow-$p$ 子群，则存在 $g \in G$ ，使得 $H'=gHg^{-1}$.
>
>固定一个 Sylow-$p$ 子群 $H$ ，令 $S \triangleq \{ g_{1}H,g_{2}H,\cdots,g_{m}H \}.$（因为 $|H|=p^{n}$ 所以 $|S|=[G:H]=m$.）
>
>对于 $G$ 在 $S$ 上的左正则作用 $g \cdot(g_{i}H)=gg_{i}H$ ，这个作用只有一个轨道 $orb(g_{i}H)=S,\forall i \in [m].$
>由轨道-稳定子定理：$|orb(g_{i}H)|=|S|=[G:Stab(g_{i}H)]=m$.
>于是 $|Stab(g_{i}H)|=\frac{|G|}{m}=p^{n}.$
>
>另一方面，直接求 $Stab(g_{i}H)$：$x \in Stab(g_{i}H)\iff xg_{i}H=g_{i}H \iff x \in g_{i}Hg_{i}^{-1}.$
>因此 $Stab(g_{i}H)=g_{i}Hg_{i}^{-1}$ ，即左陪集的稳定子就是 $H$ 的共轭子群。
>
>$H'$ 是另一个 Sylow-$p$ 子群。把上面的 $G$ 的作用限制到 $H'$ 上，考虑 $H'$ 在 $S$ 上的作用：$h' \cdot (g_{i}H)=h'g_{i}H,\forall h' \in H'.$
>因为 $|H'|=p^{n}$ ，所以 $|orb_{H'}(g_{i}H)|=|H'| / |Stab_{H'}(g_{i}H)|=p^{n-k}$ ，其中 $p^{k}=|Stab_{H'}(g_{i}H)|$.
>如果所有 $|orb_{H'}(g_{i}H)|$ 都能被 $p$ 整除，那么 $|S| \mid p$.
>而 $|S|=m,p \nmid m$，因此 $\exists$ 轨道 $C$ $s.t.$ $p \nmid |C|$.
>结合 $|C| = p$ 的幂，$|C|=1$.
>即 $\exists g_{i}H$，$h'g_{i}H=g_{i}H,\forall h' \in H'.$
>
>因此 $H' < Stab(g_{i}H)=g_{i}Hg_{i}^{-1}$.
>两端阶都是 $p^{n}$，因此 $H'=g_{i}Hg_{i}^{-1}.$ $\blacksquare.$

>[!comment]
>由于共轭操作保持了子群的阶数，因此共轭保持 Sylow-$p$ 子群性质，即如果 $H$ 是 Sylow-$p$ 子群，那么 $gHg^{-1}$ 也是 Sylow-$p$ 子群。
>
>结合 Sylow 第二定理，我们知道：所有 Sylow-$p$ 子群构成共轭作用下的一个轨道。

>[!theorem] Sylow 第三定理
>$G$ 是有限群，$p$ 是素数，若 $|G|=mp^{n},p \nmid m$，令 $r$ 为 $G$ 的 Sylow-$p$ 子群的个数，则
>1. $r \mid m$；
>2. $r \equiv 1 \pmod{p}$.

>[!proof] 1. $r \mid m$
>固定一个 Sylow-$p$ 子群 $H$ .
>令 $T = \{ \text{所有的 Sylow-} p \text{子群}\}$ 。 $G$ 在 $H$ 上的作用是共轭作用：$g \cdot H=gHg^{-1}.$
>由 Sylow 第二定理，所有的 Sylow-$p$ 子群彼此共轭。因此 $orb(H)=T$.
>$Stab(H)=\{ g \in G \mid gHg^{-1}=H\}=N_{G}(H)$.
>所以 $r=|T|=[G:N_{G}(H)]$.
>因为 $H < N_{G}(H)$，所以 $|N_{G}(H)|=p^{n}d$. 由拉格朗日定理，$d \mid m$.
>于是 $r=\frac{|G|}{|N_{G}(H)|}=\frac{mp^{n}}{p^{n}d}=\frac{m}{d} \implies r \mid m$. $\blacksquare.$

>[!proof] 2. $r \equiv 1 \pmod{p}$
>令 $S \triangleq \{ g_{1}H,\cdots,g_{m}H \}.$
>$G$ 作用于 $S$ ：$g \cdot g_{i}H=gg_{i}H$.
>由 Sylow 第二定理的证明过程，$Stab(g_{i}H)=g_{i}Hg_{i}^{-1}$.
>由 Sylow 第二定理，这些稳定子都是 Sylow-$p$ 子群。
>
>令 $k=\# \{ x \in S \mid hx=x,\forall h \in H \}.$ 即 $H$ 在 $S$ 上作用时固定的左陪集个数。
>所有 Sylow-$p$ 子群彼此共轭，$H'=gHg^{-1}$.
>如果 $H$ 固定 $g_{i}H$，即 $hg_{i}H=g_{i}H,\forall h \in H$，那么对应的 $h'=ghg^{-1}$ 固定了$gg_{i}H$： $h'gg_{i}H=ghg^{-1}gg_{i}H=gg_{i}H$.
>所以每个 Sylow-$p$ 子群固定的左陪集个数都是 $k$ 个。
>一个左陪集 $x$ 被某个 Sylow-$p$ 子群 $K$ 固定，等价于 $K<Stab(x)$.
>两端都是 $p^{n}$ 阶子群，因此 $K=Stab(x)$.
>因此，每个 Sylow-$p$ 子群**恰好**作为 $k$ 个左陪集的稳定子出现。
>
>一共有 $r$ 个 Sylow-$p$ 子群，$m=|S|=rk$.
>让 $H$ 作用在 $S$ 上，由 [[轨道-稳定子定理]] 一节中提到的 $p$-群作用引理，$|S| \equiv |S_{H}|\pmod{p}$.
>即 $m = rk\equiv k \pmod{p}$. 
>由于 $p \nmid m$ ，$m=rk$，所以 $p \nmid k$。
>最终可以消去 $k$ 得到 $r \equiv 1 \pmod{p}$. $\blacksquare.$

在应用中，主要是 Sylow 第三定理比较常用。

>[!example] 例：148 阶群不是单群
>$148=37\times 2^{2}$.
>取 $p=37,m=4$。
>设 Sylow-37 子群的个数为 $r$，由 Sylow 第三定理，$r \mid 4$ 且 $r \equiv 1 \pmod{37}$.
>因此 $r=1$.
>
>记唯一的一个 Sylow-37 子群为 $H$，由 Sylow 第二定理，Sylow 子群在共轭后仍然是 Sylow 子群。
>因此 $\forall g \in G,gHg^{-1}=H \implies H \trianglelefteq G$.

>[!example] 例：56 阶群不是单群
>$56=7\times2^3.$
>
>1. 取 $p=7,m=8$.
>   设 Sylow-7 的子群个数为 $r_{1}$ ，由 Sylow 第三定理，$r_{1} \mid 8$ 且 $r_{1} \equiv 1 \pmod{7}$.
>   发现 $r_{1}=1 \text{ or }8$ 。
>2. 取 $p=2,m=7$.
>   设 Sylow-2 子群的个数为 $r_{2}$ ，由 Sylow 第三定理，$r_{2} \mid 7$ 且 $r_{2} \equiv 1 \pmod{2}$.
>   发现 $r_{2}=1 \text{ or }7$ 。
>
>如果 $r_{1}=1$，那么类似上例可得结论。
>
>如果 $r_{1}=8$，那么有 8 个 Sylow-7 子群，每个 Sylow-7 子群的阶为 7，有 6 个非单位元。
>这些子群一共贡献 48+1=49 个元素，剩下的 7 个不在 Sylow-7 子群中的元素。
>任取一个 Sylow-2 子群，其阶是 8，有 7 个非单位元。这些非单位元不可能在 Sylow-7 子群里，因为阶数矛盾。
>从而只能有一个 Sylow-2 子群。
>类似上例可得结论。

