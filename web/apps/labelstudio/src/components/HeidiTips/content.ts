import type { TipsCollection } from "./types";

export const defaultTipsCollection: TipsCollection = {
  projectCreation: [
    {
      title: "提示",
      content: "使用 Label Studio Enterprise 将项目组织到工作区中时，查找项目会更容易。",
      closable: true,
      link: {
        label: "了解更多",
        url: "https://docs.humansignal.com/guide/manage_projects#Create-workspaces-to-organize-projects",
        params: {
          experiment: "project_creation_tip",
          treatment: "find_and_manage_projects",
        },
      },
    },
    {
      title: "实现更快的访问权限配置",
      content:
        "通过在 Label Studio Enterprise 中将员工分配到工作区，简化将员工分配到多个项目的流程。",
      closable: true,
      link: {
        label: "了解更多",
        url: "https://docs.humansignal.com/guide/manage_projects#Add-or-remove-members-to-a-workspace",
        params: {
          experiment: "project_creation_tip",
          treatment: "faster_provisioning",
        },
      },
    },
    {
      title: "提示",
      content:
        "在企业平台中，管理员可以查看标注员绩效仪表板，以优化资源分配、改进团队管理并为薪酬提供参考。",
      closable: true,
      link: {
        label: "了解更多",
        url: "https://docs.humansignal.com/guide/dashboard_annotator",
        params: {
          experiment: "project_creation_tip",
          treatment: "annotator_dashboard",
        },
      },
    },
    {
      title: "提示",
      content:
        "使用 Label Studio Enterprise，你可以控制内部团队成员和外部标注员对特定项目和工作区的访问权限。",
      closable: true,
      link: {
        label: "了解更多",
        url: "https://docs.humansignal.com/guide/manage_users#Roles-in-Label-Studio-Enterprise",
        params: {
          experiment: "project_creation_tip",
          treatment: "access_to_projects",
        },
      },
    },
    {
      title: "提示",
      content:
        "你可以使用或修改数十个模板来配置你的标注用户界面，也可以使用类似 XML 的简单标签从头开始创建自定义配置。",
      closable: true,
      link: {
        label: "了解更多",
        url: "https://labelstud.io/guide/setup",
        params: {
          experiment: "project_creation_tip",
          treatment: "templates",
        },
      },
    },
    {
      title: "生成式人工智能的标注",
      content:
        "Label Studio 提供了适用于有监督大语言模型微调、检索增强生成（RAG）检索排序、基于人类反馈的强化学习（RLHF）、聊天机器人评估等的模板。",
      closable: true,
      link: {
        label: "Explore templates",
        url: "https://labelstud.io/templates/gallery_generative_ai",
        params: {
          experiment: "project_creation_tip",
          treatment: "genai_templates",
        },
      },
    },
  ],
  organizationPage: [
    {
      title: "看起来你们团队在壮大！",
      content:
        "使用 Label Studio Enterprise 为您的团队分配角色，并在项目和工作空间级别控制对敏感数据的访问。",
      closable: true,
      link: {
        label: "了解更多",
        url: "https://docs.humansignal.com/guide/manage_users#Roles-in-Label-Studio-Enterprise",
        params: {
          experiment: "organization_page_tip",
          treatment: "team_growing",
        },
      },
    },
    {
      title: "想要简化并保障登录过程的安全性吗？",
      content: "使用 SAML、SCIM2 或 LDAP 为您的团队在 Label Studio Enterprise 中启用单点登录。",
      closable: true,
      link: {
        label: "了解更多",
        url: "https://docs.humansignal.com/guide/auth_setup",
        params: {
          experiment: "organization_page_tip",
          treatment: "enable_sso",
        },
      },
    },
    {
      title: "提示",
      content: "试试 Label Studio Starter Cloud，专为小团队和项目优化。",
      closable: true,
      link: {
        label: "了解更多",
        url: "https://humansignal.com/pricing/",
        params: {
          experiment: "organization_page_tip",
          treatment: "starter_cloud_live",
        },
      },
    },
    {
      title: "想要实现任务分配自动化吗？",
      content:
        "创建规则，实现任务分配给标注员的自动化，并仅在每个标注员的视图中显示分配给他们的任务。同时控制每个标注员对任务的可见性。",
      closable: true,
      link: {
        label: "了解更多",
        url: "https://docs.humansignal.com/guide/setup_project#Set-up-annotation-settings-for-your-project",
        params: {
          experiment: "organization_page_tip",
          treatment: "automate_distribution",
        },
      },
    },
    {
      title: "与社区分享知识",
      content:
        "有问题或想与其他 Label Studio 用户分享技巧吗？加入社区 Slack 频道获取最新消息。",
      closable: true,
      link: {
        label: "加入社区",
        url: "https://label-studio.slack.com",
        params: {
          experiment: "organization_page_tip",
          treatment: "share_knowledge",
        },
      },
    },
    {
      title: "提示",
      content:
        "Label Studio 支持与云存储、机器学习模型以及常用工具进行多种方式的集成，以实现机器学习流程的自动化。",
      closable: true,
      link: {
        label: "Check out the integrations directory",
        url: "https://labelstud.io/integrations/",
        params: {
          experiment: "organization_page_tip",
          treatment: "integration_points",
        },
      },
    },
  ],
  projectSettings: [
    {
      title: "使用自动标注节省时间",
      content:
        "在企业平台中，利用自动化技术在不牺牲质量的前提下即时标注大规模数据集。",
      closable: true,
      link: {
        label: "了解更多",
        url: "https://docs.humansignal.com/guide/prompts_overview#Auto-labeling-with-Prompts",
        params: {
          experiment: "project_settings_tip",
          treatment: "auto_labeling",
        },
      },
    },
    {
      title: "提示",
      content:
        "使用 Label Studio Enterprise，你可以通过审核工作流程和任务一致性分数来提高标记数据的质量。",
      closable: true,
      link: {
        label: "了解更多",
        url: "https://docs.humansignal.com/guide/quality",
        params: {
          experiment: "project_settings_tip",
          treatment: "quality_and_agreement",
        },
      },
    },
    {
      title: "评估生成式人工智能模型",
      content:
        "将自动化与人工监督相结合，以评估并确保企业平台中大语言模型的质量。",
      closable: true,
      link: {
        label: "了解更多",
        url: "https://humansignal.com/evals/",
        params: {
          experiment: "project_settings_tip",
          treatment: "evals",
        },
      },
    },
    {
      title: "提示",
      content:
        "通过使用企业云服务，可以节省管理基础设施和进行升级的时间，还能获得更多用于自动化、质量把控和团队管理的功能。",
      closable: true,
      link: {
        label: "了解更多",
        url: "https://humansignal.com/platform/",
        params: {
          experiment: "project_settings_tip",
          treatment: "infrastructure_and_upgrades",
        },
      },
    },
    {
      title: "提示",
      content: "试试 Label Studio Starter Cloud，专为小团队和项目优化。",
      link: {
        label: "了解更多",
        url: "https://humansignal.com/pricing/",
        params: {
          experiment: "project_settings_tip",
          treatment: "starter_cloud_live",
        },
      },
    },
    {
      title: "提示",
      content: "可以使用后端软件开发工具包（SDK）连接机器学习模型，通过预标注或主动学习节省时间。",
      closable: true,
      link: {
        label: "了解更多",
        url: "https://labelstud.io/guide/ml",
        params: {
          experiment: "project_settings_tip",
          treatment: "connect_ml_models",
        },
      },
    },
  ],
};
