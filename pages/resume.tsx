import Link from 'next/link'
import {BsFillTelephoneInboundFill, BsGithub} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

const Resume = () => {
  return (
    <div className={'resume py-20 px-4 text-dark'}>
      <div className={'relative flex flex-col gap-4 items-center'}>
        <div className={'text-3xl font-bold'}>潘藩(PAN FAN)</div>
        <div className={'text-xl'}>Web Developer</div>
        <div className={'flex text-mid gap-4 text-sm'}>
          <div className={'flex gap-2 items-center'}>
            <BsFillTelephoneInboundFill />
            13923435457
          </div>
          <div className={'flex gap-2 items-center'}>
            <MdEmail />
            <Link href={'mailto:gemini0525@foxmail.com'} className={'underline'}>gemini0525@foxmail.com</Link>
          </div>
          <div className={'flex gap-2 items-center'}>
            <BsGithub />
            <Link href={'https://github.com/Manonicu'} className={'underline'}>https://github.com/Manonicu</Link>
          </div>
        </div>
      </div>
      <div className="education mt-8">
        <div className={'text-2xl font-bold border-b leading-loose'}>
          教育经历(Education)
        </div>
        <div className={'mt-4'}>
          <div className={'flex justify-between'}>
            <div className={'font-bold'}>
              大连理工大学城市学院(City Institute,Dalian University of
              Technology)
            </div>
            <div className="time">2007-2011</div>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <div className="major">
              信息管理与信息系统(Management Information System)
            </div>
            <div>本科</div>
          </div>
        </div>
      </div>

      <div className="skills mt-8">
        <div className="text-2xl font-bold border-b leading-loose">
          技能列表(Skills)
        </div>
        <ul className={'mt-4 pl-4'}>
          <li>
            熟悉响应式布局、flex 弹性布局、rem 自适应等布局，熟悉 CSS 预处理器
          </li>
          <li>
            熟悉 JavaScript，熟悉 Typescript，熟悉 ES6、ES7-ES12
            相关生态大部分特性的使用方法和厂家，熟悉 W3C 标准
          </li>
          <li>
            熟悉主流框架 React、Next.js 及其部分原理，熟悉其周边生态，熟悉 React
            Hooks、Zustand 等技术栈的使用，能够使用
            React+Typescript完成日常需求，能够熟练的封装公共组件，有丰富的React+Typescript项目实践
          </li>
          <li>
            熟悉主流框架 Vue2、Vue3 及其周边生态，能够基于
            vite、vue/cli、webpack等脚手架熟练开发 Vue 项目
          </li>
          <li>
            了解前端性能优化的实现，例如：代码优化、打包优化、资源优化，能够结合实际业务场景进行优化
          </li>
          <li>
            熟悉 webpack、vite、rollup 等构建工具，熟悉常用的 loader、plugin
            配置，能够基于这些工具搭建通用的开发环境，有实际开发 webpack
            插件实践
          </li>
          <li>了解 Git 基本命令行的使用，有开源库 PR、MR 经历</li>
        </ul>
      </div>

      <div className="work-experience mt-8">
        <div className="text-2xl font-bold border-b leading-loose">
          工作经历(Work Experience)
        </div>
        <div className="item mt-4 mb-12">
          <div className="flex justify-between">
            <span className={'font-bold'}>
              深圳市传易互联有限公司（高级前端开发工程师）
            </span>
            <span>2021.03-至今</span>
          </div>
          <ul className={'mt-4 pl-4'}>
            <li>
              参与 oms(管理系统)开发，该项目基于 vue2、webpack 开发，后由升级为
              vue3、vite、ts，进行组件封装与拆分、动态加载，使原本上千个页面的启动与构建从
              5 分钟以上缩减到 1-2 分钟。
            </li>
            <li>参与公司运营活动的开发，基于 Next.js、Zustand 开发。</li>
            <li>
              参与公司 C 端充值与还款项目开发，基于 Next.js、Zustand 开发。
            </li>
            <li>
              参与团队基础建设，其中包括 npm私服、docker
              化、移动端组件封装、常用函数库封装。移动端组件封装采用
              react、css-in-js(styled-components)、vite，并完成兼容性测试。
            </li>
            <li>
              参与日常项目、需求的跟进与推动，并为需求提供相关的解决方案。
            </li>
            <li>负责 Code Review，并针对性的提供更优写法。</li>
            <li>负责低代码平台搭建与开发。</li>
          </ul>

          <div className="tags">
            <div className={'font-bold my-4'}>技术栈</div>
            <div className={'flex gap-2'}>
              {[
                'JavaScript',
                'Next.js',
                'React',
                'Vue2',
                'Vue3',
                'Zustand',
                'Typescript',
                'Vite/Webpack'
              ].map((item) => (
                <span className={'p-1 rounded bg-dark text-white'} key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="item mt-4 mb-12">
          <div className="flex justify-between">
            <span className={'font-bold'}>
              深圳市金证科技股份有限公司（高级前端开发工程师）
            </span>
            <span>2020.11-2021.02</span>
          </div>
          <ul className={'mt-4 pl-4'}>
            <li>
              在金证股份证券软件总部担任开发工程师一职，负责开发和维护该公司的报表及数据采集项目。在这个项目中，使用了
              Vue 全家桶、CSS 和 Webpack
              技术栈，并负责对项目性能进行调优，以确保项目能够快速高效地运行。积极参与团队合作，与团队成员密切合作，以确保项目的交付和质量得到满足。
            </li>
          </ul>
          <div className="tags">
            <div className={'font-bold my-4'}>技术栈</div>
            <div className={'flex gap-2'}>
              {['JavaScript', 'Vue2', 'Vite/Webpack', 'Css'].map((item) => (
                <span className={'p-1 rounded bg-dark text-white'} key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="item mt-4 mb-12">
          <div className="flex justify-between">
            <span className={'font-bold'}>
              招银金融控股深圳有限公司（前端开发工程师）
            </span>
            <span>2016.9-2020.06</span>
          </div>
          <ul className={'mt-4 pl-4'}>
            <li>
              作为股票和基金交易系统的开发工程师，负责开发、维护和优化该公司的交易系统
            </li>
            <li>开发和维护客户管理系统，确保系统稳定并且满足用户需求</li>
            <li>
              基于 Node.js 开发微信分享后台，负责实现该功能的设计、开发和测试
            </li>
            <li>开发常用函数库以提高开发效率和代码复用性</li>
            <li>开发内部应用测试下载，负责全栈开发工作</li>
            <li>
              实施 Docker 化部署并负责 GitLab CI 标准规范的规划、设计和实现
            </li>
          </ul>
          <div className="tags">
            <div className={'font-bold my-4'}>技术栈</div>
            <div className={'flex gap-2'}>
              {[
                'JavaScript',
                'Vue2',
                'Webpack',
                'Css、Css3',
                'Node.js',
                'Docker'
              ].map((item) => (
                <span className={'p-1 rounded bg-dark text-white'} key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="item mt-4 mb-12">
          <div className="flex justify-between">
            <span className={'font-bold'}>上海口袋理财（前端开发工程师）</span>
            <span>2015.7-2016.07</span>
          </div>
          <ul className={'mt-4 pl-4'}>
            <li>
              主要负责公司前端开发规范的制定和实施，以及公司活动页面和官网的开发。致力于确保所有的前端开发都遵循规范和最佳实践，以提高代码质量和可维护性。同时，也负责开发公司的活动页面和官网，以满足公司的业务需求和品牌形象要求。在这个过程中，使用了
              HTML、CSS、JavaScript
              等技术，并且注重页面的响应式设计和性能优化，以确保最佳的用户体验。也与设计师、产品经理和后端工程师紧密合作，以实现项目的目标。
            </li>
          </ul>
          <div className="tags">
            <div className={'font-bold my-4'}>技术栈</div>
            <div className={'flex gap-2'}>
              {['jQuery', 'Swiper', 'Html', 'JavaScript', 'Css3'].map(
                (item) => (
                  <span className={'p-1 rounded bg-dark text-white'} key={item}>
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
        <div className="item mt-4 mb-12">
          <div className="flex justify-between">
            <span className={'font-bold'}>
              深圳市玖作文化传播有限公司（页面重构）
            </span>
            <span>2013.5.7-2015.06</span>
          </div>
          <ul className={'mt-4 pl-4'}>
            <li>
              主要负责腾讯互娱、拍拍、易迅、京东等公司的活动页面重构工作。
            </li>
            <li>
              主要作品：
              <span className={'text-xs text-brand'}>
                (时间久远，可能无法访问)
              </span>
              <ol>
                <li>
                  斗战神七十二变专题：http://dzs.qq.com/act/a20141016material/index.htm
                </li>
                <li>
                  使命召唤公测系列：http://codol.qq.com/act/a20150112clubhome/
                </li>
                <li>
                  斗战神中秋活动系列：http://dzs.qq.com/act/a20140905dzszq/index.htm
                </li>
              </ol>
            </li>
          </ul>
          <div className="tags">
            <div className={'font-bold my-4'}>技术栈</div>
            <div className={'flex gap-2'}>
              {['Html', 'Css/Css3', 'jQuery'].map((item) => (
                <span className={'p-1 rounded bg-dark text-white'} key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="item mt-4 mb-12">
          <div className="flex justify-between">
            <span className={'font-bold'}>
              深圳市鹏爱文化传播有限公司（页面重构）
            </span>
            <span>2011.9-2013.05</span>
          </div>
          <ul className={'mt-4 pl-4'}>
            <li>
              负责切图和后期维护的分院专题和官网改版(访问www.payy.cn和旧站了解详情)。参与制作鹏程分院的手机网站(h
              ttp://m.pcyy.cn/)，主要负责切图和动态效果实现，使用jquery写基础特效，其他使用插件。
              <span className={'text-xs text-brand'}>
                (时间久远，可能无法访问)
              </span>
            </li>
          </ul>
          <div className="tags">
            <div className={'font-bold my-4'}>技术栈</div>
            <div className={'flex gap-2'}>
              {['jQuery', 'Css'].map((item) => (
                <span className={'p-1 rounded bg-dark text-white'} key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="projects mt-8">
        <div className="text-2xl font-bold border-b leading-loose">
          项目经历(Projects)
        </div>
        <div className="item mt-4 mb-12">
          <div className="flex justify-between">
            <span className={'font-bold'}>
              低代码平台、后台管理系统、基于 Next.js+zustand
              的脚手架(传易互联有限公司)
            </span>
            <span>2016.9-2020.06</span>
          </div>
          <div className={'mt-4'}>
            <div className="sub-title font-bold">项目描述：</div>
            <div>
              在这些项目中，使用了 React、Next.js、zustand
              等技术，注重页面的响应式设计和性能优化，以确保最佳的用户体验。
              <br />
              在低代码平台的开发中，致力于实现一套可配置的 UI
              组件库和数据模型，以满足不同的业务需求。负责开发了多个常用的组件，如表单组件、图表组件等，并将它们封装为可配置的组件，以方便其他开发者使用。
              <br />
              在后台管理系统的开发中，注重页面的交互设计和用户体验，以提高用户的工作效率。开发了多个常用的页面，如列表页面、详情页面等，并使用了多种技术，如分页、搜索、筛选等，以提高用户的数据管理能力。
              <br />
              在基于 Next.js 和 zustand
              的脚手架的开发中，致力于提高前端应用的可维护性和可扩展性。负责开发了多个常用的功能，如权限控制、路由管理等，并将它们封装为可配置的插件，以方便其他开发者使用。同时，也使用了一些工具，如
              ESLint、Prettier 等，以提高代码质量和可读性。
            </div>
          </div>
        </div>
        <div className="item mt-4 mb-12">
          <div className="flex justify-between">
            <span className={'font-bold'}>
              股票、基金交易系统、客户管理系统(招银金融控股有限公司)
            </span>
            <span>2016.9-2020.06</span>
          </div>
          <div className={'mt-4'}>
            <div className="sub-title font-bold">项目描述：</div>
            <div>
              包括开发和维护股票交易系统和基金交易系统，以支持公司的业务需求。股票交易系统的模块包括股票买入、卖出、交易历史、资产展示和订单详情等；基金交易系统则涉及基金列表、基金详情、基金申购、基金赎回和基金认购记录等模块
              <br />
              开发客户管理系统，主要服务于客户经理，方便他们实时查看客户的资产详情，以更好地管理客户。这些项目都经过月度迭代，逐渐完善和优化
              <br />
              在这些项目中，主要采用了Vue和Vant技术栈。
            </div>
          </div>
        </div>
        <div className="item mt-4 mb-12">
          <div className="flex justify-between">
            <span className={'font-bold'}>
              口袋理财官网改版及运营活动支持(口袋理财)
            </span>
            <span>2016.9-2020.06</span>
          </div>
          <div className={'mt-4'}>
            <div className="sub-title font-bold">项目描述：</div>
            官网改版
            <br />
            前端规范
            <br />
            运营活动支持
            <br />
            月度版本迭代支持
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
